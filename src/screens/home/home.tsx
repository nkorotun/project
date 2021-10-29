import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Button} from '../../components/button';
import {useAuthState} from '../authorization/authorization.state';

export const Home = () => {
  const {exit} = useAuthState();

  return (
    <SafeAreaView>
      <Text>Welcome, Home, comandor.</Text>
      <Button title="Exit" onPress={exit} />
    </SafeAreaView>
  );
};
