import React from 'react';
import {View} from 'react-native';
import {useAuthState} from './../authorization.state';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '../../../components/button';

import {signUpSchema} from './form-schemas';
import {ControllerInput} from '../../../components/input-controller/input-controller';

export const SignUp = () => {
  const {onSubmitSignUp} = useAuthState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(signUpSchema)});

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

      <Button title="Register" onPress={handleSubmit(onSubmitSignUp)} />
    </View>
  );
};
