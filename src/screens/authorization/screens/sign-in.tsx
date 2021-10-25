import React from 'react';
import {View} from 'react-native';
import {useAuthState} from './../authorization.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from './form-schemas';
import {ControllerInput} from '../../../components/input-controller/input-controller';
import {Button} from '../../../components/button';
import {IForm} from '../authorization.types';
import {SERVER_ADRESS} from './constants';

export const SignIn = () => {
  const {login} = useAuthState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(signInSchema)});

  const onSubmit = async (body: IForm) => {
    let url = SERVER_ADRESS.singIn;
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    if (data.statusCode >= 400) {
      throw new Error('Invalid email, or password');
    }
    login(data);
  };

  return (
    <View>
      <ControllerInput
        control={control}
        errors={errors}
        name="email"
        placeholder="Enter your email"
        type="mail"
      />
      <ControllerInput
        control={control}
        errors={errors}
        name="password"
        placeholder="Enter your password"
        type="eye"
        isSecure={true}
      />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
