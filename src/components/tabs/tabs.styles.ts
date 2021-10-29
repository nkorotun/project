import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const TabsStyles = {
  Container: styled.View`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  `,
  Tab: styled.TouchableOpacity<{selected: true | false}>`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.white};
    border-bottom-width: ${BORDERS.width}px;
    ${({selected}) =>
      `border-color:${selected ? COLORS.primary : COLORS.white};`}
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
});
