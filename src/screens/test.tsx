import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import {useTestState} from './test.state';

export const Test = ({navigation}) => {
  const {exit} = useTestState();

  return (
    <SafeAreaView>
      <Text>Test Screen</Text>
      <Button title="Exit" onPress={exit} />
    </SafeAreaView>
  );
};
