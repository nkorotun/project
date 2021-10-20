import React, {FC} from 'react';
import {IInput} from './Input.types';
import {InputStyles as Styled, styles} from './Input.styles';
import {IconSVG} from '../icon/icon';
import {COLORS} from '../../constants/colors';

export const Input: FC<IInput> = props => {
  const {placeholder, value, isSecure, onChangeText, type, hasError} = props;

  return (
    <Styled.InputWrapper style={hasError ? styles.error : styles.default}>
      <Styled.Input
        onChangeText={onChangeText}
        value={value}
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
