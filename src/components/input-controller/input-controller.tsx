import React, {FC} from 'react';
import {View} from 'react-native';
import {Input} from '../input';
import {Controller} from 'react-hook-form';
import {IContollerInput} from './input-controller.types';
import {ControlInputStyles as Styled} from './input-controller.styles';

export const ControllerInput: FC<IContollerInput> = props => {
  const {control, errors, name, placeholder, type, isSecure} = props;

  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            isSecure={isSecure}
            hasError={Boolean(errors[name])}
          />
        )}
        name={name}
        defaultValue=""
      />
      {errors[name] && <Styled.Message>{errors[name].message}</Styled.Message>}
    </View>
  );
};
