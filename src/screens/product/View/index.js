import React, {useContext} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {AppContext} from '../../../hooks/AppContext';
import {SafeAreaView} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
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
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28262e'}}>
      <CustomHeader title="Detail" goBack={() => navigation.goBack()} />
      <Container>
        <Title>{product.name}</Title>
        <Image source={{uri: product.img}} />
        <Description>{product.description}</Description>
        <CardActions>
          <Action onPress={() => navigation.navigate('EditProduct', {product})}>
            <ActionText>Edit</ActionText>
          </Action>
          <Action
            onPress={() => {
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
