import React, {useContext} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {AppContext} from '../../Context/Context';
import {Modal, SafeAreaView} from 'react-native';

import {
  Container,
  Title,
  Image,
  Description,
  CardActions,
  Action,
  ActionText,
} from './styles';

const ProductView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {data, setData} = useContext(AppContext);
  const {product} = route.params;
  const deleteProduct = () => {
    const res = data.filter((item) => item.id != product.id);
    setData(res);
    console.log('result', res);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Title>{product.name}</Title>
        <Image source={{uri: product.img}} />
        <Description>{product.description}</Description>
        <CardActions>
          <Action>
            <ActionText>Edit</ActionText>
          </Action>
          <Action
            onPress={() => {
              console.log('deleting');
              deleteProduct();
            }}>
            <ActionText>Delete</ActionText>
          </Action>
        </CardActions>
      </Container>
    </SafeAreaView>
  );
};

export default ProductView;
