import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const TabsStyles = {
  Container: styled.View`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-items: stretch;
    background-color: ${COLORS.white};
    border-color: ${COLORS.white};
    border-bottom-width: ${BORDERS.width};
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
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderBottom: {
    borderColor: COLORS.purple,
  },
});
