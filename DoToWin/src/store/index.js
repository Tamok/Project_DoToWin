/**
 * File: index.js
 * Project: DoToWin
 * Description: This file sets up the Redux store and persistor.
 */

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import reducers
import rootReducer from './reducers';

// Configuration for redux persist
const persistConfig = {
    key: 'root',
    storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

// Create persistor
const persistor = persistStore(store);

// Export the store and persistor
export { store, persistor };
