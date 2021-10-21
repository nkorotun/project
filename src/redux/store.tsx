import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistReduce = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReduce,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
