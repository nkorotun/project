import React from 'react';
import {Button, View} from 'react-native';
import {Input} from '../../components/input';
import {Tabs} from '../../components/tabs';
import {RootState} from '../../redux/store';
import {PICTURES} from '../../constants/pictures';
import {useSelector, useDispatch} from 'react-redux';
import {
  changeMode,
  setToken,
  setUserEmail,
  setUserPassword,
  setUserConfirmPassword,
  addError,
  removeError,
} from '../../redux/reducers';
import {AuthStyles as Styled} from './authorization.styles';

export const Auth = () => {
  const {mail, password, confirmPassword, mode, inputError} = useSelector(
    (state: RootState) => state.auth,
  );

  const dispatch = useDispatch();

  const changeMail = (value: string) => {
    dispatch(setUserEmail(value));
  };
  const changePassword = (value: string) => {
    dispatch(setUserPassword(value));
  };
  const changeconfirmPassword = (value: string) => {
    dispatch(setUserConfirmPassword(value));
  };

  const login = () => {
    dispatch(setToken('login'));
  };
  const register = () => {
    password === confirmPassword
      ? dispatch(setToken('login'))
      : console.log('error');
  };

  const selectTab = (newMode: string) => {
    if (mode === newMode) {
      return;
    }
    dispatch(changeMode(newMode));
  };

  const validateForm = () => {
    if (mode === 'login' && password.length > 0) {
      login();
      return;
    }
    if (
      password === confirmPassword &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      register();
      return;
    }
    dispatch(addError());
    setTimeout(() => dispatch(removeError()), 3000);
  };

  return (
    <View>
      <Styled.Logo source={PICTURES.logoIcon} />
      <Tabs selectedMode={mode} changeTab={selectTab} />
      {mode === 'login' ? (
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
          <Button title="Login" onPress={validateForm} />
        </View>
      ) : (
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
            onChangeText={changeconfirmPassword}
            type={'eye'}
            value={confirmPassword}
            isSecure={true}
            hasError={inputError}
          />
          <Button title="Register" onPress={validateForm} />
        </View>
      )}
    </View>
  );
};
