import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export const AppContext = createContext();

export default function AppProvider(props) {
  const {children} = props;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getStorage = async () => {
      const stored = await AsyncStorage.getItem('@Crud-User');
      setUserData(stored);
    };
    getStorage();
  });

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}>
      {children}
    </AppContext.Provider>
  );
}
