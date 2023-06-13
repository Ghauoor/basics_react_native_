import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const StateComponents = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I'm {props.name}, and I'm {isHungry ? 'Hungry' : 'Full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk' : 'Thank You'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <StateComponents name="Koko" />
      <StateComponents name="Dodo" />
    </>
  );
};

export default Cafe;
