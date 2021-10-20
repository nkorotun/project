import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Auth} from './screens/authorization';
import {Test} from './screens/test';

export const MainComponent = () => {
  const {token} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {token ? <Test /> : <Auth />}
      </ScrollView>
    </SafeAreaView>
  );
};
