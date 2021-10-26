import React, {FC} from 'react';
import {NavLabelStyles as Styled} from './navigation-label.styles';
import {INavLabel} from './navigation-label.types';

export const NavLabel: FC<INavLabel> = props => {
  const {title, selected} = props;

  return <Styled.Text selected={selected}>{title}</Styled.Text>;
};
