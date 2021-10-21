import {useDispatch, useSelector} from 'react-redux';
import {AUTH_MODE} from '../../constants/auth';
import {
  changeMode,
  setToken,
  setUserConfirmPassword,
  setUserEmail,
  setUserPassword,
} from '../../redux/reducers';

import {RootState} from '../../redux/store';

export const useAuthState = () => {
  const {mode} = useSelector((state: RootState) => state.auth);
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
  const selectTab = (newMode: string) => {
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
