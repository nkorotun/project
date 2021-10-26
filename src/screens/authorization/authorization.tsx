import React from 'react';
import {SafeAreaView} from 'react-native';
import {Tabs} from '../../components/tabs';
import {RootState} from '../../redux/store';
import {PICTURES} from '../../constants/pictures';
import {useSelector} from 'react-redux';
import {useAuthState} from './authorization.state';
import {AuthStyles as Styled} from './authorization.styles';
import {AUTH_MODE} from '../../constants/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from './screens/sign-in';
import {SignUp} from './screens/sign-up';
import {SCREENS} from '../../constants/screens';

export const Auth = () => {
  const Stack = createNativeStackNavigator();

  const {mode} = useSelector((state: RootState) => state.auth);
  const {selectTab} = useAuthState();

  return (
    <SafeAreaView>
      <Styled.Logo source={PICTURES.logoIcon} />
      <Tabs selectedMode={mode} onChangeTab={selectTab} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {mode === AUTH_MODE.LOGIN ? (
          <Stack.Screen name={SCREENS.signIn} component={SignIn} />
        ) : (
          <Stack.Screen name={SCREENS.signUp} component={SignUp} />
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};
