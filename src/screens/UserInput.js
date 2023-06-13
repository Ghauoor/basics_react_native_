import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Alert,
  Clipboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const UserInput = () => {
  const [text, setText] = useState('');

  function resetText() {
    setText('');
  }

  function upperCaseText() {
    setText(text.toUpperCase());
  }

  function lowerCaseText() {
    setText(text.toLowerCase());
  }

  function showAlert() {
    Alert.alert('Text Converted', `Converted Text: ${text.toUpperCase()}`, [
      {text: 'OK'},
    ]);
  }

  function copyText() {
    Clipboard.setString(text.toUpperCase());
    Alert.alert(
      'Text Copied',
      'The converted text has been copied to the clipboard.',
      [{text: 'OK'}],
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>String Utility</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        multiline={true}
        onChangeText={newText => setText(newText)}
        value={text}
      />

      <View style={styles.convertedContainer}>
        <Text style={styles.emojiText}>
          {text
            .split(' ')
            .map(word => word && '🎉')
            .join(' ')}
        </Text>

        <Text style={styles.characterCountText}>
          Total number of characters: {text.length}
        </Text>
      </View>

      <Text style={styles.inputText}>{text}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Convert to Uppercase"
          onPress={upperCaseText}
          color="#33023e"
        />
        <Button
          title="Convert to LowerCase"
          onPress={lowerCaseText}
          color="#78138f"
        />

        <Button title="Show Alert" onPress={showAlert} color="#FF4E4E" />

        <Button title="Copy" onPress={copyText} color="#007AFF" />

        <Button title="Reset" onPress={resetText} color="#888888" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#33023e',
  },
  input: {
    height: 40,
    borderColor: '#33023e',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  convertedContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emojiText: {
    fontSize: 42,
    paddingVertical: 10,
    color: '#33023e',
  },
  characterCountText: {
    marginTop: 5,
    color: '#888888',
  },
  inputText: {
    marginBottom: 20,
    color: '#33023e',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    margin: 10,
  },
});

export default UserInput;
