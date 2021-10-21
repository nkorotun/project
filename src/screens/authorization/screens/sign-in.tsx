import React from 'react';
import {Button, Text, View} from 'react-native';
import {Input} from '../../../components/input';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {useAuthState} from './../authorization.state';

export const SignIn = ({navigation}) => {
  const {mail, password, inputError} = useSelector(
    (state: RootState) => state.auth,
  );
  const {changeMail, changePassword, login} = useAuthState();

  return (
    <View>
      <Input
        placeholder="Enter email"
        onChangeText={changeMail}
        type={'mail'}
        value={mail}
        hasError={false}
      />
      <Input
        placeholder="Enter password"
        onChangeText={changePassword}
        type={'eye'}
        value={password}
        isSecure={true}
        hasError={inputError}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
};
