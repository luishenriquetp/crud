import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import ProductView from '../screens/ProductView';
import CreateProduct from '../screens/CreateProduct';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}
    initialRouteName="Dashboard">
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="ProductDetail" component={ProductView} />
    <App.Screen name="CreateProduct" component={CreateProduct} />
  </App.Navigator>
);

export default AppRoutes;
