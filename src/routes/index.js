import React, {useContext} from 'react';
import {AppContext} from '../hooks/AppContext';
import AuthRoutes from './auth';
import AppRoutes from './app';
const Routes = () => {
  // const [user, setUser] = useState(null);
  const {userData} = useContext(AppContext);
  return userData ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
