import styled from 'styled-components/native';
import {BORDERS} from '../../constants/borders';
import {COLORS} from '../../constants/colors';

export const ButtonStyles = {
  Button: styled.View<{color: string | undefined}>`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 35%;
    height: 40px;
    padding: 0 15px;
    margin: 10px 25px;
    border-radius: ${BORDERS.radius * 2}px;
    ${({color}) => `background-color:${color ? color : COLORS.primary};`}
  `,
  Text: styled.Text`
    font-size: 16px;
    line-height: 21px;
    font-weight: 600;
    letter-spacing: 0.25px;
    color: ${COLORS.white};
  `,
};
