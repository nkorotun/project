import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';
import {COLORS} from '../../constants/colors';

export const CameraStyles = {
  Camera: styled(RNCamera)`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  `,
  Container: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color: black;
  `,
  Top: styled.View`
    position: absolute;
    flex: 1;
    flex-direction: row-reverse;
    width: 100%;
    padding: 30px 20px 15px;
    top: 0;
    left: 0;
    background-color: ${COLORS.black};
    z-index: 1;
  `,
  Bottom: styled.View`
    position: absolute;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 30px;
    bottom: 0;
    left: 0;
    background-color: ${COLORS.black};
    z-index: 1;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
};
