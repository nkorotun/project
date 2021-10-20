import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {Auth} from './src/screens/auth';
import {Test} from './src/screens/test';
import {store} from './src/redux/store';

const App = () => {
  let isLogin = store.getState().auth;

  store.subscribe(() => {
    isLogin = store.getState().auth;
    console.log(isLogin);
    console.log(store.getState());
  });

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Provider store={store}>
          {isLogin === 'login' ? <Test /> : <Auth />}
        </Provider>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
