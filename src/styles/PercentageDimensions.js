import React from 'react';
import {View} from 'react-native';

const PercentageDimensions = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '15%',
          backgroundColor: 'red',
        }}
      />
      <View
        style={{
          width: '66%',
          height: '35%',
          backgroundColor: 'green',
        }}
      />
      <View
        style={{
          height: '10%',
          backgroundColor: 'yellow',
        }}
      />
      <View
        style={{
          height: '40%',
          backgroundColor: 'orange',
        }}
      />
    </View>
  );
};

export default PercentageDimensions;
