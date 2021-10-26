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

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREENS.home}
        options={{
          tabBarLabel: ({focused}) => (
            <NavLabel title={SCREENS.home} selected={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <IconSVG
              type="home"
              size={24}
              color={focused ? COLORS.purple : COLORS.gray}
              onPress={onPress(SCREENS.home)}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name={SCREENS.camera}
        options={{
          tabBarLabel: ({focused}) => (
            <NavLabel title={SCREENS.camera} selected={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <IconSVG
              type="camera"
              size={24}
              color={focused ? COLORS.purple : COLORS.gray}
              onPress={onPress(SCREENS.camera)}
            />
          ),
        }}
        component={Camera}
      />
      <Tab.Screen
        name={SCREENS.profile}
        options={{
          tabBarLabel: ({focused}) => (
            <NavLabel title={SCREENS.profile} selected={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <IconSVG
              type="profile"
              size={24}
              color={focused ? COLORS.purple : COLORS.gray}
              onPress={onPress(SCREENS.profile)}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
