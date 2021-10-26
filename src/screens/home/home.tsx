import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Button} from '../../components/button';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {useAuthState} from '../authorization/authorization.state';

export const Home = () => {
  const {exit} = useAuthState();
  const {mail} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <Text>Welcome, Home, comandor.</Text>
      <Text>{mail}</Text>
      <Button title="Exit" onPress={exit} />
    </SafeAreaView>
  );
};
