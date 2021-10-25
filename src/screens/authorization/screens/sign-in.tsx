import React from 'react';
import {View} from 'react-native';
import {useAuthState} from './../authorization.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from './form-schemas';
import {ControllerInput} from '../../../components/input-controller/input-controller';
import {Button} from '../../../components/button';
import {IForm} from '../authorization.types';
import {SERVER_ADRESS} from '../constants';
import {postData} from '../axios';

export const SignIn = () => {
  const {login} = useAuthState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(signInSchema)});

  const onSubmit = async (body: IForm) => {
    try {
      const responce = await postData(SERVER_ADRESS.singIn, body);
      login(responce.data);
    } catch (error) {
      await Promise.reject(error);
    }
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
