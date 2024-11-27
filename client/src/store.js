import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // لاحظ الحروف الصغيرة "storage"

const rootReducer = combineReducers({ user: userSlice });

const persistConfig = {
  key: 'root',
  storage, // لاحظ الحروف الصغيرة "storage"
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
