import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/home/home';
import {Camera} from '../../screens/camera/camera';
import {IconSVG} from '../icon/icon';
import {COLORS} from '../../constants/colors';
import {NavLabel} from './navigation-label/navigation-label';
import {useNavigation} from '@react-navigation/core';
import {SCREENS} from '../../constants/screens';
import {Profile} from '../../screens/profile/profile';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
  ];

  return (
    <Tab.Navigator>
      {screenSData.map(screen => {
        return (
          <Tab.Screen
            name={screen.name}
            options={{
              tabBarLabel: ({focused}) => (
                <NavLabel title={screen.name} selected={focused} />
              ),
              tabBarIcon: ({focused}) => (
                <IconSVG
                  type={screen.iconType}
                  size={24}
                  color={focused ? COLORS.purple : COLORS.gray}
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
