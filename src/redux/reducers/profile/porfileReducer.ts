import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
  id: string;
  image?: string;
  name: string;
  surname: string;
  email: string;
  editMode: boolean;
}

const initialState: IInitialState = {
  id: '',
  name: '',
  surname: '',
  email: '',
  editMode: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeName: (state, {payload}: PayloadAction<string>) => {
      state.name = payload;
    },
    changeSurname: (state, {payload}: PayloadAction<string>) => {
      state.surname = payload;
    },
    setPhoto: (state, {payload}: PayloadAction<string>) => {
      state.image = payload;
    },
    setUserInfo: (state, {payload}: PayloadAction<IInitialState>) => {
      state.id = payload.id;
      state.image = payload.image;
      state.name = payload.name;
      state.surname = payload.surname;
      state.email = payload.email;
    },
    changeEditMode: state => {
      state.editMode = !state.editMode;
    },
  },
});

export const {
  changeName,
  changeSurname,
  setUserInfo,
  changeEditMode,
  setPhoto,
} = profileSlice.actions;

export default profileSlice.reducer;
