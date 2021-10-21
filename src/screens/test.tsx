import React from 'react';
import {Text, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/reducers';

export const Test = () => {
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logOut());
  };

  return (
    <View>
      <Text>Test Screen</Text>
      <Button title="Exit" onPress={exit} />
    </View>
  );
};
