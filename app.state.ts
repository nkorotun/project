import {useState} from 'react';

export const useAppState = () => {
  const [isLogin, setIsLogin] = useState(true);

  const tabHandler = () => setIsLogin(!isLogin);

  return {
    isLogin,
    tabHandler,
  };
};
