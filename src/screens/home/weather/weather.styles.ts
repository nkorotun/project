import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';

export const WeatherStyles = {
  Container: styled.View`
    width: 200px;
    height: 200px;
    margin: 5px;
    background-color: ${COLORS.gray};
  `,
  City: styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${COLORS.primary};
  `,
  WeatherBox: styled.View`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  Description: styled.Text`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.white};
  `,
  Weather: styled.Text`
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.white};
  `,
  Temperature: styled.Text`
    position: absolute;
    bottom: 15px;
    left: 15px;
    font-size: 24px;
    color: ${COLORS.primary};
  `,
  Icon: styled.Image`
    width: 50px;
    height: 50px;
  `,
};
