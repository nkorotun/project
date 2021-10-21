import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/reducers';

export const Test = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Test Screen</Text>
      <Button title="Exit" onPress={() => dispatch(logOut())} />
    </SafeAreaView>
  );
};
