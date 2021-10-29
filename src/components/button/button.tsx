import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonStyles as Styled} from './button.styles';
import {IButton} from './button.types';

export const Button: FC<IButton> = props => {
  const {title, color, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Styled.Button color={color}>
        <Styled.Text>{title}</Styled.Text>
      </Styled.Button>
    </TouchableOpacity>
  );
};
