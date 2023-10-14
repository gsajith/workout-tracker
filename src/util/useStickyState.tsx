import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const useStickyState = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const checkStorage = async () => {
      const stickyValue = await AsyncStorage.getItem(key);
      if (stickyValue) {
        setValue(JSON.parse(stickyValue));
      } else {
      }
    };
    checkStorage();
  }, [key]);

  useEffect(() => {
    console.log('Rewriting', key);
    AsyncStorage.removeItem(key);
    AsyncStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useStickyState;
