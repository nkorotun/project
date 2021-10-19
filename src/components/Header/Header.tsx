import React, {FC} from 'react';
import {HeaderStyles as Styled} from './header.styles';
import {IHeader} from './header.types';

export const Header: FC<IHeader> = props => {
  const {logo} = props;

  return <Styled.Header resizeMode="cover" source={logo} />;
};
