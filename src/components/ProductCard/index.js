import React from 'react';
// import {View} from 'react-native';

import {Container, Content, Image, Title} from './styles';

const product = ({item, selectItem}) => {
  return (
    <Container
      onPress={() => {
        selectItem(item);
        console.log('press');
      }}>
      <Image source={{uri: item.img}} />
      <Content>
        <Title>{item.name}</Title>
      </Content>
    </Container>
  );
};

export default product;
