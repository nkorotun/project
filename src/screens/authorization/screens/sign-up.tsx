import React from 'react';
import {View} from 'react-native';
import {useAuthState} from './../authorization.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '../../../components/button';

import {signUpSchema} from './form-schemas';
import {ControllerInput} from '../../../components/input-controller/input-controller';
import {IForm} from '../authorization.types';
import {SERVER_ADRESS} from './constants';

export const SignUp = () => {
  const {register} = useAuthState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(signUpSchema)});

  const onSubmit = async (body: IForm) => {
    let url = SERVER_ADRESS.signUp;
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    if (data.statusCode >= 400) {
      throw new Error('This email is already exist');
    }
    register(data);
  };
  return (
    <View>
      <ControllerInput
        control={control}
        errors={errors}
        name="email"
        placeholder="Enter email"
        type="mail"
      />
      <ControllerInput
        control={control}
        errors={errors}
        name="password"
        placeholder="Enter password"
        type="eye"
        isSecure={true}
      />
      <ControllerInput
        control={control}
        errors={errors}
        name="confirmPassword"
        placeholder="Confirm password"
        type="eye"
        isSecure={true}
      />

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
