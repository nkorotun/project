import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';

export const NavLabelStyles = {
  Text: styled.Text<{selected: true | false}>`
    font-size: 12px;
    ${({selected}) => `color:${selected ? COLORS.purple : COLORS.gray};`}
  `,
};
