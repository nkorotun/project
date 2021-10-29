import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/home';
import {Camera} from '../../screens/camera';
import {IconSVG} from '../icon/icon';
import {COLORS} from '../../constants/colors';
import {NavLabel} from './navigation-label/navigation-label';
import {useNavigation} from '@react-navigation/core';
import {SCREENS} from '../../constants/screens';
import {Profile} from '../../screens/profile';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Map} from '../../screens/map';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const onPress = (routeName: string) => () => {
    navigate(routeName);
  };

  const screenSData = [
    {name: SCREENS.home, iconType: 'home', component: Home},
    {name: SCREENS.camera, iconType: 'camera', component: Camera},
    {name: SCREENS.profile, iconType: 'profile', component: Profile},
    {name: SCREENS.map, iconType: 'map', component: Map},
  ];

  return (
    <Tab.Navigator>
      {screenSData.map(screen => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            options={{
              tabBarLabel: ({focused}) => (
                <NavLabel title={screen.name} selected={focused} />
              ),
              tabBarIcon: ({focused}) => (
                <IconSVG
                  type={screen.iconType}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                  onPress={onPress(screen.name)}
                />
              ),
            }}
            component={screen.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
