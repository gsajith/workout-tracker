/* Home */

import React, {useContext} from 'react';
import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ToggleColorScheme from '../components/ToggleColorScheme';

const Home = () => {
  const {theme, setNewTheme} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setNewTheme(newTheme);
  };

  const isDarkMode = theme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ToggleColorScheme toggleTheme={handleToggleTheme} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
