import {useDispatch, useSelector} from 'react-redux';
import {
  changeMode,
  logOut,
  setToken,
  setUserConfirmPassword,
  setUserEmail,
  setUserPassword,
} from '../../redux/reducers/auth/authReducer';

import {RootState} from '../../redux/store';
import {IResponce} from './authorization.types';

export const useAuthState = () => {
  const {mode} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const setMail = (value: string) => {
    dispatch(setUserEmail(value));
  };
  const setPassword = (value: string) => {
    dispatch(setUserPassword(value));
  };
  const setConfirmPassword = (value: string) => {
    dispatch(setUserConfirmPassword(value));
  };

  const login = (userData: IResponce | any) => {
    setMail(userData.email);
    dispatch(setToken(userData.access_token));
  };
  const register = (userData: IResponce | any) => {
    setMail(userData.email);
    dispatch(setToken(userData.access_token));
  };
  const selectTab = (newMode: string) => {
    if (mode === newMode) {
      return;
    }
    dispatch(changeMode(newMode));
  };

  const exit = () => {
    dispatch(logOut());
  };

  return {
    setMail,
    setPassword,
    setConfirmPassword,
    login,
    register,
    selectTab,
    exit,
  };
};
