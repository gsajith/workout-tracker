/* Home */

import React, {useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, Text, FlatList} from 'react-native';
import ThemeContext, {THEMES} from '../context/ThemeContext';
import ToggleColorScheme from '../components/ToggleColorScheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useStickyState from '../util/useStickyState';

const DEFAULT_SAVED_EXERCISES = ['Bench Press', 'Bicep Curl', 'Deadlift'];

const Home = () => {
  const {theme, setNewTheme} = useContext(ThemeContext);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const [savedExercises, setSavedExercises] = useStickyState(
    DEFAULT_SAVED_EXERCISES,
    'savedExercises',
  );

  useEffect(() => {
    console.log(savedExercises);
  }, [savedExercises]);

  const addExercise = (newExercise: string) => {
    setSavedExercises((oldExercises: string[]) => {
      const newExercises = JSON.parse(JSON.stringify(oldExercises));
      newExercises.push(newExercise);
      return newExercises;
    });
  };

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setNewTheme(newTheme);
  };

  return (
    <SafeAreaView style={{backgroundColor: THEMES[theme].background}}>
      <View
        style={{
          position: 'absolute',
          left: 8,
          bottom: 8,
          zIndex: 2,
        }}>
        <ToggleColorScheme toggleTheme={handleToggleTheme} />
      </View>
      <View
        style={{backgroundColor: THEMES[theme].background2, height: '100%'}}>
        {savedWorkouts.length > 0 && (
          <FlatList
            data={savedWorkouts}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  margin: 10,
                  backgroundColor: 'white',
                  height: 100,
                }}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        )}
        {savedWorkouts.length === 0 && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.3,
              marginTop: 150,
            }}>
            <Icon
              name="weight-lifter"
              size={48}
              style={{
                margin: 12,
                color: THEMES[theme].text,
              }}
            />
            <Text
              style={{
                color: THEMES[theme].text,
                fontFamily: 'Futura',
                width: '80%',
                textAlign: 'center',
                fontSize: 18,
              }}>
              Welcome!{'\n'}
              Start a workout and log some sets!{'\n\n'}
              Everything will be saved locally to your device.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Home;
