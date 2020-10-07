import React, {useCallback, useRef, useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Form} from '@unform/mobile';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppContext} from '../../../hooks/AppContext';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import {Container, Image} from './styles';

const EditProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {product} = route.params;
  const {data, setData} = useContext(AppContext);

  const formRef = useRef(null);
  const handleSignIn = useCallback((inputData) => {
    const {name, description} = inputData;
    if (name && description) {
      const newProduct = {
        id: product.id,
        name,
        description,
        img: product.img,
      };
      const dataAux = data.filter((item) => item.id !== product.id);
      const newData = [...dataAux, newProduct];
      setData(newData);
      navigation.navigate('Dashboard');
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}
      enable>
      <SafeAreaView style={{flex: 1, backgroundColor: '#28262e'}}>
        <CustomHeader title="Edit" goBack={() => navigation.goBack()} />
        <ScrollView
          style={{flex: 1}}
          keyboardShouldPersistTaps="handle"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={{uri: product.img}} />
            <Form
              ref={formRef}
              initialData={{
                name: product.name,
                description: product.description,
              }}
              onSubmit={handleSignIn}>
              <Input name="name" placeholder="Product Name" />
              <Input name="description" placeholder="Description" />
              <Button
                text="Save"
                onPress={() => {
                  formRef.current.submitForm();
                }}
              />
            </Form>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProduct;
