import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from './screens/authorization';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {SCREENS} from './constants/screens';
import {BottomNavigation} from './components/navigation/navigation';
import {useMapState} from './screens/map/map.state';
import Geolocation from '@react-native-community/geolocation';

const LocalStack = createNativeStackNavigator();

export const RootComponent = () => {
  const {token} = useSelector((state: RootState) => state.auth);

  const {setGeo} = useMapState();
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setGeo(info.coords.latitude, info.coords.longitude),
    );
  });

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
