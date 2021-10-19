import { tSConditionalType } from '@babel/types';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Button,
} from 'react-native';

import Header from './src/components/Header/Header';
import { IconSVG } from './src/components/icon/icon';
import { Input } from './src/components/input';
import { LoginForm } from './src/components/loginForm';
import { Tabs } from './src/components/tabs';


const App = () => {

  const [isLogin, setIsLogin] = useState(true)



  return (
    <SafeAreaView >
      <StatusBar barStyle='light-content' />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <Header logo={require('./src/assets/images/logo.png')}/>


        <Tabs isLogin={true} selectTab={() => setIsLogin(!isLogin)}/>

        <LoginForm 
          mailIcon={require('./src/assets/images/mail.png')}
          passwordIcon={require('./src/assets/images/view.png')}
        />

        <View>
          <Text>or login with</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ChangeMode: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    shadowColor: '#661a1a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.7,
    shadowRadius: 1,
    elevation: 5,
  },
  loginMode: {
    height: '100%',
    width: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderBottomColor: '#661a1a',
    borderBottomWidth: 0,
  },
  logBtn: {
    width: '100%',
    backgroundColor: '#661a1a',
    color: '#fff',
  }

});

export default App;
