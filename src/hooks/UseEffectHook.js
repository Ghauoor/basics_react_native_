import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const UseEffectHooks = () => {
  useEffect(() => console.warn('I am Use Effect Hook'), []);
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={{fontSize: 34}}>Use Effect Hook</Text>
      <Text>{count}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseEffectHooks;
