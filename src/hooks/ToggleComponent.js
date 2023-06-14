import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const ToggleComponents = () => {
  const [show, setShow] = useState(true);
  const onPress = () => {
    setShow(s => (s = !s));
  };
  return (
    <View>
      <Text style={{fontSize: 23}}>Show and Hide Components</Text>

      <Button title="Hide" onPress={onPress} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{color: 'green', fontSize: 34}}>User Component</Text>
    </View>
  );
};

export default ToggleComponents;
