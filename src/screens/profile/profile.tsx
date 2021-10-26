import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

export const Profile = () => {
  const {mail} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <Text>Welcome, to profile page.</Text>
      <Text>Your Email: {mail}</Text>
    </SafeAreaView>
  );
};
