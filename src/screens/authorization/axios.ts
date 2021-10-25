import axios, {AxiosPromise} from 'axios';
import {SERVER_ADRESS} from './constants';
import {store} from '../../redux/store';

export type IResponse<T> = AxiosPromise<T>;

export const getInstance = () => {
  const instance = axios.create({
    baseURL: `${SERVER_ADRESS.base}`,
    timeout: 15000,
  });

  instance.interceptors.response.use(response => {
    return response;
  });

  instance.interceptors.request.use(async config => {
    const user = store.getState().auth;
    if (!user.token) {
      return config;
    }

    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    return config;
  });
  return instance;
};

export const putData = (requestUrl: string, payload: any) => {
  return getInstance().put(`${SERVER_ADRESS.base}${requestUrl}`, payload);
};

export const postData = (requestUrl: string, payload: any) => {
  return getInstance().post(`${SERVER_ADRESS.base}${requestUrl}`, payload);
};

export const getData = (requestUrl: string, payload: any) => {
  return getInstance().get(`${SERVER_ADRESS.base}${requestUrl}`, payload);
};
