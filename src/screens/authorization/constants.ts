import {Platform} from 'react-native';

export const SERVER_ADRESS = {
  singIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  enter: '/auth/enter',
  user: '/user',
  base:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000'
      : 'http://localhost:3000',
} as const;
