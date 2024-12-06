import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import lessonsReducer from './slice/lessonsSlice';
import { lessonProgressSlice } from './slice/lessonProgressSlice';

const rootReducer = combineReducers({ 
  user: userSlice, 
  lessons: lessonsReducer,
  lessonProgress: lessonProgressSlice.reducer 
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
