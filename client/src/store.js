import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // استخدام sessionStorage بدلاً من localStorage
import lessonsReducer from './slice/lessonsSlice';

const rootReducer = combineReducers({ 
  user: userSlice, 
  lessons: lessonsReducer 
});

const persistConfig = {
  key: 'root',
  storage: storageSession, // استخدام sessionStorage هنا
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // تعطيل الفحص للتسلسلات غير القابلة للتسلسل
    }),
});

export const persistor = persistStore(store);
