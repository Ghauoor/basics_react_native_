import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const TouchableOpacityBasics = () => {
  const [count, setCount] = useState(0);
  const incrimentCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={incrimentCount}>
          <Text style={styles.text}>Press Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {
    fontSize: 25,
  },
});

export default TouchableOpacityBasics;
