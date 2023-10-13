import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemeContext from '../context/ThemeContext';

const ToggleColorScheme = ({toggleTheme}: any) => {
  const {theme} = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  return (
    <View style={styles({isDarkMode}).toggleColorSchemeContainer}>
      <Icon.Button
        size={26}
        borderRadius={30}
        style={styles({isDarkMode}).toggleColorScheme}
        name={isDarkMode ? 'moon-o' : 'sun-o'}
        onPress={() => {
          toggleTheme();
        }}
      />
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    toggleColorSchemeContainer: {
      width: 42,
    },
    toggleColorScheme: {
      width: 50,
      paddingLeft: props.isDarkMode ? 10 : 8,
      backgroundColor: '#283768',
    },
  });

export default ToggleColorScheme;
