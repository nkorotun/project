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
import {useProfileState} from '../profile/profile.state';

export const useCameraState = () => {
  const dispatch = useDispatch();

  const {updateUserAvatar} = useProfileState();

  const setCameraMode = () => {
    dispatch(changeCameraFrontMode());
  };
  const setFlash = () => {
    dispatch(changeFlash());
  };
  const setPhoto = (image: string) => {
    dispatch(changePhoto(image));
  };
  const loadImage = (image: any) => {
    updateUserAvatar(image);
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
      includeBase64: true,
      cropping: true,
    });
    image ? loadImage(image.data) : null;
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
    loadImage,
    openGallery,
    openCropper,
    refresh,
  };
};
