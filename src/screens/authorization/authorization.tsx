import React from 'react';
import {Button, View} from 'react-native';
import {Input} from '../../components/input';
import {Tabs} from '../../components/tabs';
import {RootState} from '../../redux/store';
import {PICTURES} from '../../constants/pictures';
import {useSelector} from 'react-redux';
import {useAuthState} from './authorization.state';
import {AuthStyles as Styled} from './authorization.styles';
import {AUTH_MODE} from '../../constants/auth';

export const Auth = () => {
  const {mail, password, confirmPassword, mode, inputError} = useSelector(
    (state: RootState) => state.auth,
  );

  const {changeConfirmPassword, changeMail, changePassword, selectTab} =
    useAuthState();

  const handleChangeTab = (newMode: string) => {
    selectTab(newMode, mode);
  };

  return (
    <View>
      <Styled.Logo source={PICTURES.logoIcon} />
      <Tabs selectedMode={mode} onChangeTab={handleChangeTab} />
      {mode === AUTH_MODE.LOGIN ? (
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
          <Button title="Login" onPress={() => {}} />
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
            onChangeText={changeConfirmPassword}
            type={'eye'}
            value={confirmPassword}
            isSecure={true}
            hasError={inputError}
          />
          <Button title="Register" onPress={() => {}} />
        </View>
      )}
    </View>
  );
};
