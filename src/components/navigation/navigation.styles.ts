import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';

export const NavStyles = {
  Container: styled.View`
    width: 100%;
    padding: 10px 20px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: ${COLORS.white};
  `,
};
