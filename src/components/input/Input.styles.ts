import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const InputStyles = {
  Input: styled.TextInput`
    width: 90%;
    overflow: hidden;
  `,
  InputWrapper: styled.View<{hasError: true | false; disabled: true | false}>`
    border-width: ${BORDERS.width}px;
    border-radius: ${BORDERS.radius}px;
    border-color: ${COLORS.gray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 50px;
    margin: 10px 25px;
    padding: 0px 12px;
    border-width: ${BORDERS.width}px;
    border-radius: ${BORDERS.radius}px;
    ${({hasError}) => `border-color:${hasError ? COLORS.red : COLORS.gray};`}
    ${({disabled}) =>
      `background-color:${disabled ? COLORS.gray : COLORS.white};
        color: ${disabled ? COLORS.darkGray : COLORS.black};`}
  `,
};

export const styles = StyleSheet.create({
  default: {
    borderColor: COLORS.gray,
  },
  error: {
    borderColor: COLORS.red,
  },
});
