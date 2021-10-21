import React from 'react';
import {Button, View} from 'react-native';
import {Input} from '../../../components/input';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {useAuthState} from '.././authorization.state';

export const SignUp = ({navigation}) => {
  const {mail, password, confirmPassword, inputError} = useSelector(
    (state: RootState) => state.auth,
  );

  const {changeConfirmPassword, changeMail, changePassword, login} =
    useAuthState();

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
      <Input
        placeholder="Confirm password"
        onChangeText={changeConfirmPassword}
        type={'eye'}
        value={confirmPassword}
        isSecure={true}
        hasError={inputError}
      />
      <Button title="Register" onPress={login} />
    </View>
  );
};
