import {useDispatch} from 'react-redux';
import {AUTH_MODE} from '../../constants/auth';
import {
  addError,
  changeMode,
  removeError,
  setToken,
  setUserConfirmPassword,
  setUserEmail,
  setUserPassword,
} from '../../redux/reducers';

export const useAuthState = () => {
  const dispatch = useDispatch();

  const changeMail = (value: string) => {
    dispatch(setUserEmail(value));
  };
  const changePassword = (value: string) => {
    dispatch(setUserPassword(value));
  };
  const changeConfirmPassword = (value: string) => {
    dispatch(setUserConfirmPassword(value));
  };

  const login = () => {
    dispatch(setToken(AUTH_MODE.TOKEN));
  };
  const register = () => {
    dispatch(setToken(AUTH_MODE.TOKEN));
  };
  const selectTab = (newMode: string, mode: string) => {
    if (mode === newMode) {
      return;
    }
    dispatch(changeMode(newMode));
  };

  return {
    changeMail,
    changePassword,
    changeConfirmPassword,
    login,
    register,
    selectTab,
  };
};
