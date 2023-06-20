/**
 * File: App.js
 * Project: DoToWin
 * Description: This is the main application file that sets up the navigation and Redux store.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

// The main function of the application, persists the Redux store
function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </PersistGate>
      </Provider>
  );
}
