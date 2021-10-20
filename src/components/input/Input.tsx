import React, {FC} from 'react';
import {IInput} from './Input.types';
import {InputStyles as Styled} from './Input.styles';
import {IconSVG} from '../icon/icon';

export const Input: FC<IInput> = props => {
  const {placeholder, value, isSecure, onChangeText, type} = props;

  return (
    <Styled.InputWrapper>
      <Styled.Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
      <IconSVG type={type} size={24} />
    </Styled.InputWrapper>
  );
};
