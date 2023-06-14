import React from 'react';
import {StyleSheet, View} from 'react-native';

const ResponsiveUI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <View style={styles.innerBoxOne} />
        <View style={styles.innerBoxOne} />
        <View style={styles.innerBoxOne} />
      </View>
      <View style={styles.boxTwo} />
      <View style={styles.boxThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxOne: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'green',
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'blue',
  },
  innerBoxOne: {
    flex: 1,

    backgroundColor: 'white',
    margin: 10,
  },
});

export default ResponsiveUI;
