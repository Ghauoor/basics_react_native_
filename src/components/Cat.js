import React from 'react';

import {Text, View, TextInput, Image} from 'react-native';
const Dog = props => {
  return (
    <View>
      <Text>Hello, My name is {props.name}</Text>
    </View>
  );
};
const Cat = () => {
  const name = 'koko';
  return (
    <View>
      <Dog name="Bull" />
      <Dog name="Henry" />
      <Dog name="Dodo" />
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>My name is {name}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        defaultValue="Name me"
      />
    </View>
  );
};

export default Cat;
