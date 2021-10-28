import React, {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {IconSVG} from '../../components/icon/icon';
import {COLORS} from '../../constants/colors';
import {CameraStyles as Styled} from './camera.styles';
import {useCameraState} from './camera.state';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

export const Camera = () => {
  const {flash, cameraFrontMode, photo} = useSelector(
    (state: RootState) => state.camera,
  );
  const {setCameraMode, setFlash, openCropper, openGallery} = useCameraState();
  const cameraRef = useRef<RNCamera>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 1};
      const data = await cameraRef.current?.takePictureAsync(options);
      openCropper(data.uri);
    }
  };

  return (
    <Styled.Container>
      <Styled.Top>
        <IconSVG
          type="lightning"
          color={COLORS.white}
          size={32}
          onPress={setFlash}
        />
      </Styled.Top>
      {photo ? (
        <Styled.Image source={{uri: photo}} />
      ) : (
        <Styled.Camera
          ref={cameraRef}
          type={
            cameraFrontMode
              ? RNCamera.Constants.Type.front
              : RNCamera.Constants.Type.back
          }
          flashMode={
            flash
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      )}
      <Styled.Bottom>
        <IconSVG
          type="gallery"
          color={COLORS.white}
          size={32}
          onPress={openGallery}
        />
        <IconSVG
          type="circle"
          color={COLORS.red}
          size={64}
          onPress={takePicture}
        />
        <IconSVG
          type="reverse"
          color={COLORS.white}
          size={32}
          onPress={setCameraMode}
        />
      </Styled.Bottom>
    </Styled.Container>
  );
};
