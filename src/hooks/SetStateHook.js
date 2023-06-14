import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SetStateHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.warn(count);
  }, [count]);

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
  };

  const updateData = () => {
    setData(prevData => prevData + 2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Use Effect Hook as Dependency Did Change</Text>
      <Text style={styles.countText}>{count}</Text>
      <Button title="Update" onPress={onPress} />
      <Text style={styles.dataText}>{data}</Text>
      <Button onPress={updateData} title="Update Data" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  dataText: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default SetStateHook;
