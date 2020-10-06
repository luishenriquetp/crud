import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ContextProvider from './Context/Context';
import Routes from './routes';
import {Container} from './styles';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
