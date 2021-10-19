import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {useAppState} from './app.state';
import {Header} from './src/components/header';

import {LoginForm} from './src/components/login-form';
import {Tabs} from './src/components/tabs';
import {PICTURES} from './src/constants/pitures';

const App = () => {
  const {isLogin, tabHandler} = useAppState();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header logo={PICTURES.logoIcon} />

        <Tabs isLogin={isLogin} selectTab={tabHandler} />

        <LoginForm
          mailIcon={PICTURES.mailIcon}
          passwordIcon={PICTURES.viewIcon}
        />

        <View>
          <Text>or login with</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
