import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import ProductView from '../screens/product/View';
import CreateProduct from '../screens/product/Create';
import EditProduct from '../screens/product/Edit';

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
    <App.Screen name="EditProduct" component={EditProduct} />
  </App.Navigator>
);

export default AppRoutes;
