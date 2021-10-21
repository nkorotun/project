import React, {FC} from 'react';
import {IInput} from './Input.types';
import {InputStyles as Styled} from './Input.styles';
import {IconSVG} from '../icon/icon';
import {COLORS} from '../../constants/colors';

export const Input: FC<IInput> = props => {
  const {onBlur, placeholder, value, isSecure, onChangeText, type, hasError} = props;

  return (
    <Styled.InputWrapper hasError={hasError}>
      <Styled.Input
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
      <IconSVG
        type={type}
        size={24}
        color={hasError ? COLORS.red : COLORS.gray}
      />
    </Styled.InputWrapper>
  );
};
