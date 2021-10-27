import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {
  changeCameraFrontMode,
  changeFlash,
  changePhoto,
  reset,
} from '../../redux/reducers/camera/cameraReducer';

export const useCameraState = () => {
  const dispatch = useDispatch();

  const setCameraMode = () => {
    dispatch(changeCameraFrontMode());
  };
  const setFlash = () => {
    dispatch(changeFlash());
  };
  const setPhoto = (image: string) => {
    dispatch(changePhoto(image));
  };
  const displayImage = (image: string) => {
    setPhoto(image);
    setTimeout(() => {
      setPhoto('');
    }, 5000);
  };
  const refresh = () => {
    dispatch(reset);
  };

  const openCropper = async (imageURL: string) => {
    const image = await ImagePicker.openCropper({
      mediaType: 'photo',
      path: imageURL,
      width: 300,
      height: 400,
      cropping: true,
    });
    image ? displayImage(image.path) : null;
  };

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 400,
      maxHeight: 800,
      includeBase64: true,
    };

    launchImageLibrary(options, async res => {
      res.didCancel ? null : openCropper(res?.uri ?? '');
    });
  };

  return {
    setCameraMode,
    setFlash,
    setPhoto,
    displayImage,
    openGallery,
    openCropper,
    refresh,
  };
};
