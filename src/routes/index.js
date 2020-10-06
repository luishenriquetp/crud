import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../Context/Context';
import AuthRoutes from './auth';
import AppRoutes from './app';
import AsyncStorage from '@react-native-community/async-storage';
// import {} from '../hooks/auth';
const Routes = () => {
  // const [user, setUser] = useState(null);
  const {userData} = useContext(AppContext);
  return userData ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
