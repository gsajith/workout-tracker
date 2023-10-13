/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Home from './src/pages/Home';
import {ThemeProvider} from './src/context/ThemeContext';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
