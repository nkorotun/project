import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  mode: 'login',
  mail: '',
  password: '',
  confirmPassword: '',
  token: '',
  inputError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserEmail: (state, {payload}: PayloadAction<string>) => {
      state.mail = payload;
    },
    setUserPassword: (state, {payload}: PayloadAction<string>) => {
      state.password = payload;
    },
    setUserConfirmPassword: (state, {payload}: PayloadAction<string>) => {
      state.confirmPassword = payload;
    },
    setToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    logOut: () => initialState,
    changeMode: (state, {payload}: PayloadAction<string>) => {
      return {...initialState, mode: payload};
    },
    addError: state => {
      state.inputError = true;
    },
    removeError: state => {
      state.inputError = false;
    },
  },
});

export const {
  setUserEmail,
  setUserPassword,
  setUserConfirmPassword,
  setToken,
  logOut,
  changeMode,
  addError,
  removeError,
} = authSlice.actions;

export default authSlice.reducer;
