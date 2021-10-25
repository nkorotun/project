import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useTestState} from './test.state';
import {Button} from '../components/button';

export const Test = () => {
  const {exit} = useTestState();

  return (
    <SafeAreaView>
      <Text>Test Screen</Text>
      <Button title="Exit" onPress={exit} />
    </SafeAreaView>
  );
};
