import React, {FC} from 'react';
import {ITabs} from './tabs.types';
import {TabsStyles as Styled, styles} from './tabs.styles';
import {AUTH_MODE} from '../../constants/auth';

export const Tabs: FC<ITabs> = props => {
  const {selectedMode, onChangeTab} = props;

  const login = () => {
    onChangeTab(AUTH_MODE.LOGIN);
  };
  const register = () => {
    onChangeTab(AUTH_MODE.REGISTER);
  };

  return (
    <Styled.Container style={styles.shadows}>
      <Styled.Tab onPress={login} selected={selectedMode === AUTH_MODE.LOGIN}>
        <Styled.Text>Login</Styled.Text>
      </Styled.Tab>

      <Styled.Tab
        onPress={register}
        selected={selectedMode === AUTH_MODE.REGISTER}>
        <Styled.Text>Sign Up</Styled.Text>
      </Styled.Tab>
    </Styled.Container>
  );
};
