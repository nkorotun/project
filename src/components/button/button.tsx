import React, {FC} from 'react';
import {ButtonStyles as Styled} from './button.styles';
import {IButton} from './button.types';

export const Button: FC<IButton> = props => {
  const {title, onPress} = props;

  return (
    <Styled.Button onPress={onPress}>
      <Styled.Text>{title}</Styled.Text>
    </Styled.Button>
  );
};
