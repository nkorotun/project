import styled from 'styled-components/native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const ButtonStyles = {
  Button: styled.Pressable`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 40px;
    padding: 0 16px;
    margin: 10px 25px;
    border-radius: ${BORDERS.radius * 2}px;
    background-color: ${COLORS.purple};
  `,
  Text: styled.Text`
    font-size: 16px;
    line-height: 21px;
    font-weight: 600;
    letter-spacing: 0.25px;
    color: ${COLORS.white};
  `,
};
