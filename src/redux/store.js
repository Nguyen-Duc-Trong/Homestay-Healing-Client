// <<<<<<< HEAD
// import rootReducer from './rootReducer'; // Bạn sẽ tạo rootReducer sau
// import { persistStore } from "redux-persist";
// import {createStore, applyMiddleware} from "redux"
// import { thunk } from "redux-thunk";
// const reduxStore = () => {
//   const store = createStore(rootReducer, applyMiddleware(thunk))
//   const persistor = persistStore(store)
//   return {store, persistor}
// }
// export default reduxStore

// store.js
import { configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { thunk } from "redux-thunk";
// Cấu hình persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main1', 'auth'],
};
// Tạo persistedReducer từ persistConfig và rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Cấu hình store với persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tuần tự hóa để tránh lỗi với redux-persist
    }).concat(thunk),
});
// Tạo persistor từ store
const persistor = persistStore(store);
export { store, persistor };

