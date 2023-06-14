import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DynamicGrid = () => {
  return (
    <View>
      <Text style={styles.main}>Grid</Text>
      <View style={styles.container}>
        <Text style={styles.item}>Paul</Text>
        <Text style={styles.item}>Paul</Text>
        <Text style={styles.item}>Paul</Text>
        <Text style={styles.item}>Paul</Text>
        <Text style={styles.item}>Paul</Text>
        <Text style={styles.item}>Paul</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    fontSize: 35,
    color: '#232222',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    fontSize: 25,
    backgroundColor: '#619bd5',
    color: 'white',
    margin: 5,
    padding: 5,
    height: 120,
    width: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default DynamicGrid;
