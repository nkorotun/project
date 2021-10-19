import React, {FC} from 'react';
import {IInput} from './Input.types';
import {InputStyles as Styled} from './Input.styles';

export const Input: FC<IInput> = props => {
  const {placeholder, value, isSecure, onChangeText, icon} = props;

  return (
    <Styled.InputWrapper>
      <Styled.Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
      <Styled.InputIcon source={icon} />
    </Styled.InputWrapper>
  );
};
