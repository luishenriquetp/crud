import React, {useState, createContext, useEffect} from 'react';
import {FakeData} from '../utils/fakeData';
import AsyncStorage from '@react-native-community/async-storage';
export const AppContext = createContext();

export default function AppProvider(props) {
  const {children} = props;
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(FakeData);

  useEffect(() => {
    const getStorage = async () => {
      const stored = await AsyncStorage.getItem('@Crud-User');
      setUserData(stored);
      // AsyncStorage.clear();
    };
    getStorage();
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        userData,
        setUserData,
      }}>
      {children}
    </AppContext.Provider>
  );
}
