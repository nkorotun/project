import {AxiosResponse} from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeMode,
  logOut,
  setToken,
  setUserConfirmPassword,
  setUserEmail,
  setUserPassword,
} from '../../redux/reducers/auth/authReducer';
import {setUserInfo} from '../../redux/reducers/profile/porfileReducer';

import {RootState} from '../../redux/store';
import {IForm, IResponce} from './authorization.types';
import {getData, postData} from './axios';
import {SERVER_ADRESS} from '../../constants/auth';

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

  const enter = (userData: IResponce | any) => {
    setMail(userData.email);
    dispatch(setToken(userData.access_token));
    getProfileData(userData.access_token, userData.email);
  };

  const getProfileData = async (token: string, email: string) => {
    try {
      const responce: AxiosResponse<any> = await getData(SERVER_ADRESS.enter, {
        headers: {Authorization: 'Bearer ' + token},
      });

      const userData = {...responce.data.user, email};
      setProfileData(userData);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  const setProfileData = (data: any) => {
    dispatch(setUserInfo(data));
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

  const onSubmitSignIn = async (body: IForm) => {
    try {
      const responce = await postData(SERVER_ADRESS.singIn, body);
      enter(responce.data);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  const onSubmitSignUp = async (body: IForm) => {
    try {
      const responce = await postData(SERVER_ADRESS.signUp, body);
      enter(responce.data);
    } catch (error) {
      await Promise.reject(error);
    }
  };

  return {
    setMail,
    setPassword,
    setConfirmPassword,
    selectTab,
    exit,
    onSubmitSignIn,
    onSubmitSignUp,
  };
};
