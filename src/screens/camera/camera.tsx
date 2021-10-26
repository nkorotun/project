import React, {useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {IconSVG} from '../../components/icon/icon';
import {COLORS} from '../../constants/colors';
import {CameraStyles as Styled} from './camera.styles';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

export const Camera = () => {
  const [flash, changeFlash] = useState(false);
  const [cameraFrontMode, changeCameraFrontMode] = useState(false);

  const setCameraMode = () => {
    changeCameraFrontMode(!cameraFrontMode);
  };
  const setFlash = () => {
    changeFlash(!flash);
  };

  const cameraRef = useRef<RNCamera>(null);

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 400,
      maxHeight: 800,
      includeBase64: true,
    };

    launchImageLibrary(options, async res => {
      return res.uri;
    });
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5};
      const data = await cameraRef.current?.takePictureAsync(options);
      return data.uri;
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
