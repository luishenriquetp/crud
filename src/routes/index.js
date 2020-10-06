import React, {useEffect, useState} from 'react';
import AuthRoutes from './auth';
import AppRoutes from './app';
import AsyncStorage from '@react-native-community/async-storage';
// import {} from '../hooks/auth';
const Routes = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getData() {
      const stored = await AsyncStorage.getItem('@Crud-User');
      if (stored) {
        setUser(stored);
      }
    }
    getData();
  }, []);

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
