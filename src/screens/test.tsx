import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useTestState} from './test.state';
import {Button} from '../components/button';
import {RootState} from '../redux/store';
import {useSelector} from 'react-redux';
import {TestStyles as Styled} from './test.styles';

export const Test = () => {
  const {exit} = useTestState();
  const {mail} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <Styled.Wrapper>
        <Text>Welcome, {mail}, this is test screen</Text>
        <Button title="Exit" onPress={exit} />
      </Styled.Wrapper>
    </SafeAreaView>
  );
};
