import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
  news: any;
  weather: any;
}
const initialState: IInitialState = {
  news: [],
  weather: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setWeather: (state, {payload}: PayloadAction<any>) => {
      state.weather = payload;
    },
    setNews: (state, {payload}: PayloadAction<any>) => {
      state.news = payload;
    },
  },
});

export const {setWeather, setNews} = homeSlice.actions;

export default homeSlice.reducer;
