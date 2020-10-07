import React, {useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContext} from '../../hooks/AppContext';
import {
  Container,
  HeaderAction,
  HeaderActionText,
  HeaderTitle,
  UserName,
} from './styles';

const CustomHeader = ({title, goBack, primary}) => {
  const {userData, setUserData} = useContext(AppContext);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setUserData(null);
  };

  if (primary) {
    return (
      <Container>
        <HeaderTitle>
          Welcome {'\n'}
          <UserName>{userData.name}</UserName>
        </HeaderTitle>
        <HeaderAction onPress={() => handleLogout()}>
          <HeaderActionText>Logout</HeaderActionText>
        </HeaderAction>
      </Container>
    );
  }
  return (
    <Container>
      <HeaderAction onPress={() => goBack()}>
        <HeaderActionText>{'<'}</HeaderActionText>
      </HeaderAction>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderAction />
    </Container>
  );
};

export default CustomHeader;
