import {useDispatch, useSelector} from 'react-redux';
import {
  changeMode,
  setToken,
  setUserConfirmPassword,
  setUserEmail,
  setUserPassword,
} from '../../redux/reducers';

import {RootState} from '../../redux/store';
import {IResponce} from './authorization.types';

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

  const login = (userData: IResponce) => {
    changeMail(userData.email);
    dispatch(setToken(userData.access_token));
  };
  const register = (userData: IResponce) => {
    changeMail(userData.email);
    dispatch(setToken(userData.access_token));
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
