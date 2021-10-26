import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Button} from '../../components/button';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {useTestState} from '../test.state';

export const Home = () => {
  const {exit} = useTestState();
  const {mail} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <Text>Welcome, Home, comandor.</Text>
      <Text>{mail}</Text>
      <Button title="Exit" onPress={exit} />
    </SafeAreaView>
  );
};
