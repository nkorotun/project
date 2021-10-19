import React, { FC, useState } from 'react'
import { View, Button } from 'react-native'
import { ILoginForm, User } from './loginForm.types'
import { LoginFormStyles as Styled } from './loginForm.styles'
import { Input } from './../input'

export const LoginForm:FC<ILoginForm> = (props) => {

    const {mailIcon, passwordIcon} = props;

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('')
    const createUser = (config: User): { email: string; password: string } => {
      return {
        email: config.email,
        password: config.password
      };
    }
  
    const login = () => {
      return createUser({email: email,password: password})
    }

    return (
        <View>
          <Input
            onChangeText={onChangeEmail}
            value={email}
            placeholder='Enter your email' 
            icon={mailIcon}
            isSecure={false}
          />
          <Input 
            onChangeText={onChangePassword}
            value={password}
            placeholder='Enter your password' 
            icon={passwordIcon}
            isSecure={true}
          />
          <Button 
            color="#841584"
            onPress={login}
            title='LOGIN'
          />
        </View>
    )
}


