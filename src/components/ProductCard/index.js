import React from 'react';

import {Container, Content, Image, Title} from './styles';

const product = ({item, selectItem}) => {
  return (
    <Container
      onPress={() => {
        selectItem(item);
      }}>
      <Image source={{uri: item.img}} />
      <Content>
        <Title>{item.name}</Title>
      </Content>
    </Container>
  );
};

export default product;
