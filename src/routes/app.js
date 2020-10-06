import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}
    initialRouteName="SignUp">
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;