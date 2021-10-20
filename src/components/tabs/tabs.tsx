import React, {FC} from 'react';
import {ITabs} from './tabs.types';
import {TabsStyles as Styled, styles} from './tabs.styles';

export const Tabs: FC<ITabs> = props => {
  const {selectedMode, changeTab} = props;

  const login = () => {
    changeTab('login');
  };
  const register = () => {
    changeTab('register');
  };

  return (
    <Styled.Container style={styles.shadows}>
      <Styled.Tab
        onPress={login}
        style={
          selectedMode === 'login' ? styles.borderActive : styles.borderDisable
        }>
        <Styled.Text>Login</Styled.Text>
      </Styled.Tab>

      <Styled.Tab
        onPress={register}
        style={
          selectedMode === 'register'
            ? styles.borderActive
            : styles.borderDisable
        }>
        <Styled.Text>Sign Up</Styled.Text>
      </Styled.Tab>
    </Styled.Container>
  );
};
