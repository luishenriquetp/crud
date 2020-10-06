import React, {useContext, useState} from 'react';
import {AppContext} from '../../Context/Context';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import {
  Container,
  EmptyList,
  EmptyListText,
  Header,
  HeaderTitle,
  HeaderAction,
} from './styles';

const Dashboard = () => {
  const navigation = useNavigation();
  const {data} = useContext(AppContext);
  const navigateToDetail = (product) => {
    navigation.navigate('ProductDetail', {product});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28262e'}}>
      <Header>
        <HeaderTitle>Product list</HeaderTitle>
        <HeaderAction />
      </Header>
      <Container>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <EmptyList onPress={() => navigation.navigate('CreateProduct')}>
              <EmptyListText>Add a new product</EmptyListText>
            </EmptyList>
          }
          renderItem={({item}) => (
            <ProductCard
              selectItem={(product) => navigateToDetail(product)}
              key={item.id}
              item={item}
            />
          )}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
