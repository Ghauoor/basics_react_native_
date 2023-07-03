import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MyReactNativeForm} from './src/forms/MyReactNativeform';

export default function App() {
  return (
    <View style={styles.container}>
      <MyReactNativeForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
