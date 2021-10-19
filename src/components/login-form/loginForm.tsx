import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {User} from './loginForm.types';
import {Input} from '../input';

export const LoginForm = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const createUser = (config: User): {email: string; password: string} => {
    return {
      email: config.email,
      password: config.password,
    };
  };

  const login = () => {
    return createUser({email: email, password: password});
  };

  return (
    <View>
      <Input
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter your email"
        type={'mail'}
        isSecure={false}
      />
      <Input
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter your password"
        type={'eye'}
        isSecure={true}
      />
      <Button color="#841584" onPress={login} title="LOGIN" />
    </View>
  );
};
