import React, {useContext} from 'react';
import {AppContext} from '../../hooks/AppContext';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import CustomHeader from '../../components/CustomHeader';

import {Container, EmptyList, EmptyListText} from './styles';

const Dashboard = () => {
  const navigation = useNavigation();
  const {data} = useContext(AppContext);
  const navigateToDetail = (product) => {
    navigation.navigate('ProductDetail', {product});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28262e'}}>
      <CustomHeader primary />
      <Container>
        <EmptyList onPress={() => navigation.navigate('CreateProduct')}>
          <EmptyListText>Add a new product</EmptyListText>
        </EmptyList>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
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
