import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const TabsStyles = {
  Container: styled.View`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    background-color: #fff;
    border-color: #841584;
    border-bottom: 3px;
  `,
  Tab: styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text``,
};

export const styles = StyleSheet.create({
  shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
