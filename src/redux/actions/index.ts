export const SET_USER_MAIL = 'SET_USER_MAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_LOGIN = 'SET_LOGIN';

export const setName =
  (mail: string) =>
  (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: SET_USER_MAIL,
      payload: mail,
    });
  };

export const setAge =
  (password: string) =>
  (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: SET_USER_PASSWORD,
      payload: password,
    });
  };

export const setLogin =
  (isLogin: boolean) =>
  (dispatch: (arg0: {type: string; payload: boolean}) => void) => {
    dispatch({
      type: SET_LOGIN,
      payload: isLogin,
    });
  };
