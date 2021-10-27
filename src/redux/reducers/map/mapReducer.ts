import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IGeo {
  latitude: number;
  longitude: number;
}

interface IInitialState {
  geo: IGeo;
}
const initialState: IInitialState = {
  geo: {
    latitude: 0,
    longitude: 0,
  },
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeGeo: (state, {payload}: PayloadAction<IGeo>) => {
      state.geo.latitude = payload.latitude;
      state.geo.longitude = payload.longitude;
    },
  },
});

export const {changeGeo} = mapSlice.actions;

export default mapSlice.reducer;
