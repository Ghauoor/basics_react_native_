import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from 'react-native';

const RandomColorGenerator = () => {
  const [color, setColor] = useState('#000000');
  const [copySuccess, setCopySuccess] = useState(false);

  const generateRandomColor = () => {
    const randomColor = generateRGBColor();
    setColor(randomColor);
  };

  const generateRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const copyColorCode = () => {
    Clipboard.setString(color);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.title}>Random Color Generator</Text>
      <TouchableOpacity
        style={[styles.colorContainer, {borderColor: color}]}
        onPress={copyColorCode}
        activeOpacity={0.7}>
        <Text style={styles.colorText}>{color}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.copyButton, copySuccess && styles.copyButtonSuccess]}
        onPress={copyColorCode}>
        <Text style={styles.copyButtonText}>
          {copySuccess ? 'Copied!' : 'Copy Color Code'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={generateRandomColor}>
        <Text style={styles.generateButtonText}>Generate Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  colorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 40,
  },
  colorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  copyButton: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    width: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  copyButtonSuccess: {
    backgroundColor: '#4CAF50',
  },
  copyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  generateButton: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    width: 200,
    alignItems: 'center',
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default RandomColorGenerator;
