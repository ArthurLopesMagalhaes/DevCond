import {Text, View} from 'react-native';
import React from 'react';
import { StateProvider } from './src/contexts/StateContext';
import { MainRoutes } from './src/routes';
import { Preload } from './src/screens/Preload';

const App = () => {
  return (
    <StateProvider>
      <MainRoutes/>
    </StateProvider>
  );
};

export default App;
