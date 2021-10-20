import React from 'react';
import {Button, Image, View} from 'react-native';
import {Input} from '../components/input';
import {Tabs} from '../components/tabs';
import {store} from '../redux/store';
import {PICTURES} from '../constants/pictures';
import {SET_USER_MAIL, SET_USER_PASSWORD, SET_LOGIN} from '../redux/actions';

export const Auth = () => {
  const mail = store.getState().mail;
  const password = store.getState().password;

  const changeMail = value => {
    store.dispatch({type: SET_USER_MAIL, payload: value});
  };
  const changePassword = value => {
    store.dispatch({type: SET_USER_PASSWORD, payload: value});
  };

  const login = () => {
    store.dispatch({type: SET_LOGIN, payload: 'login'});
  };

  return (
    <View>
      <Image source={PICTURES.logoIcon} />
      <Tabs isLogin={true} selectTab={() => {}} />
      <Input
        placeholder="Enter email"
        onChangeText={changeMail}
        type={'mail'}
        value={mail}
      />
      <Input
        placeholder="Enter password"
        onChangeText={changePassword}
        type={'eye'}
        value={password}
        isSecure={true}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
};
