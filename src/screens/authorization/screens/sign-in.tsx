import React from 'react';
import {Button, View} from 'react-native';
import {useAuthState} from './../authorization.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from './form-schemas';
import {ControllerInput} from '../../../components/input-controller/input-controller';

export const SignIn = ({navigation}) => {
  const {login} = useAuthState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(signInSchema)});

  const onSubmit = data => {
    login();
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
