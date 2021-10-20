import styled from 'styled-components/native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const InputStyles = {
  Input: styled.TextInput`
    max-width: 90%;
    overflow: hidden;
  `,
  InputWrapper: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 40px;
    padding: 0 16px;
    margin: 10px 25px;
    border-width: ${BORDERS.width};
    border-radius: ${BORDERS.radius};
    border-color: ${COLORS.gray};
    background-color: ${COLORS.white};
  `,
};
