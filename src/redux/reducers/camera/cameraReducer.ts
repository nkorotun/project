import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
  flash: boolean;
  cameraFrontMode: boolean;
  photo: string;
}

const initialState: IInitialState = {
  flash: false,
  cameraFrontMode: false,
  photo: '',
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    changeCameraFrontMode: state => {
      state.cameraFrontMode = !state.cameraFrontMode;
    },
    changeFlash: state => {
      state.flash = !state.flash;
    },
    changePhoto: (state, {payload}: PayloadAction<string>) => {
      state.photo = payload;
    },
    reset: () => initialState,
  },
});

export const {changeCameraFrontMode, changeFlash, changePhoto, reset} =
  cameraSlice.actions;

export default cameraSlice.reducer;
