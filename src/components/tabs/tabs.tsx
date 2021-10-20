import React, {FC} from 'react';
import {ITabs} from './tabs.types';
import {TabsStyles as Styled, styles} from './tabs.styles';

export const Tabs: FC<ITabs> = props => {
  const {isLogin, selectTab} = props;

  return (
    <Styled.Container style={styles.shadows}>
      <Styled.Tab onPress={selectTab} disabled={isLogin}>
        <Styled.Text>Login</Styled.Text>
      </Styled.Tab>

      <Styled.Tab onPress={selectTab} disabled={!isLogin}>
        <Styled.Text>Sign Up</Styled.Text>
      </Styled.Tab>
    </Styled.Container>
  );
};
