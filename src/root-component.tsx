import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from './screens/authorization';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {SCREENS} from './constants/screens';
import {BottomNavigation} from './components/navigation/navigation';

const LocalStack = createNativeStackNavigator();

export const RootComponent = () => {
  const {token} = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      <LocalStack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <LocalStack.Screen name={SCREENS.main} component={BottomNavigation} />
        ) : (
          <LocalStack.Screen name={SCREENS.auth} component={Auth} />
        )}
      </LocalStack.Navigator>
    </NavigationContainer>
  );
};
