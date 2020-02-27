import React from 'react';
import AppTabNavigator from './navigation/AppTabNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppTabNavigator />
    </Provider>
  );
}
