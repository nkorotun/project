import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';

export const ProfileStyles = {
  Avatar: styled.Image`
    height: 150px;
    width: 150px;
    border-width: 2px;
    border-radius: 150px;
    border-color: ${COLORS.gray};
  `,
  AvatarBox: styled.View`
    margin: 15px auto;
  `,
  Name: styled.Text`
    text-align: center;
  `,
  Label: styled.Text`
    margin-top: 10px;
    margin-left: 44px;
    margin-bottom: -8px;
    color: ${COLORS.primary};
    font-weight: 800;
  `,
  ButtonContainer: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  `,
  IconAdd: styled.TouchableOpacity`
    position: absolute;
    right: 0;
    bottom: 0;
  `,
};
