/* context/ThemeContext.js */

import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance, ColorSchemeName} from 'react-native';

const DEFAULT_THEME = 'light';
const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setNewTheme: (_: any) => {},
});

type Theme = {
  background: string;
  background2: string;
  text: string;
};

export const THEMES: {[key: string]: Theme} = {
  light: {
    background: '#ffffff',
    background2: '#eeeeee',
    text: '#000000',
  },
  dark: {
    background: '#1a1a1a',
    background2: '#303030',
    text: '#ffffff',
  },
};

export const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
          Appearance.setColorScheme(savedTheme as ColorSchemeName);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  const setNewTheme = (newTheme: any) => {
    setTheme(newTheme);
    Appearance.setColorScheme(newTheme as ColorSchemeName);
    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, setNewTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
