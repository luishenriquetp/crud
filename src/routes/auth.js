import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}
    initialRouteName="SignUp">
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
