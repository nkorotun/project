import {useDispatch} from 'react-redux';
import {
  changeLightning,
  changeCameraMode,
  reset,
} from '../../redux/reducers/camera';

export const useCameraState = () => {
  const dispatch = useDispatch();

  const setLight = () => {
    dispatch(changeLightning());
  };
  const setCameraMode = () => {
    dispatch(changeCameraMode());
  };
  const refresh = () => {
    dispatch(reset());
  };

  return {refresh, setCameraMode, setLight};
};
