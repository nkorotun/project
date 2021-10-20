import React from 'react';
import {Text, Button, View} from 'react-native';
import {SET_LOGIN} from '../redux/actions';
import {store} from '../redux/store';

export const Test = () => {
  return (
    <View>
      <Text>Test Screen</Text>
      <Button title="Exit" onPress={() => store.dispatch({type: SET_LOGIN, payload: 'Exit'})} />
    </View>
  );
};
