import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from './reducers/auth';
import mapReducer from './reducers/map';
import cameraReducer from './reducers/camera';
import profileReducer from './reducers/profile';
import homeReducer from './reducers/home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const authReduce = persistReducer(persistConfig, authReducer);
const mapReduce = persistReducer(persistConfig, mapReducer);
const cameraReduce = persistReducer(persistConfig, cameraReducer);
const profileReduce = persistReducer(persistConfig, profileReducer);
const homeReduce = persistReducer(persistConfig, homeReducer);

export const store = configureStore({
  reducer: {
    auth: authReduce,
    map: mapReduce,
    camera: cameraReduce,
    profile: profileReduce,
    home: homeReduce,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
