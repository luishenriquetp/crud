import React, {useCallback, useRef, useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {AppContext} from '../../../hooks/AppContext';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import {Container, Image} from './styles';

const CreateProduct = () => {
  const navigation = useNavigation();
  const {data, setData} = useContext(AppContext);
  const [defaultImage, setDefaultImage] = useState(
    'https://static.paodeacucar.com/img/uploads/1/65/658065.png',
  );
  const formRef = useRef(null);
  const handleSignIn = useCallback((inputData) => {
    const {name, description} = inputData;
    if (name && description) {
      const newProduct = {
        id: String(Date.now()),
        name,
        description,
        img: defaultImage,
      };
      setData([...data, newProduct]);
      navigation.goBack();
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}
      enable>
      <SafeAreaView style={{flex: 1, backgroundColor: '#28262e'}}>
        <CustomHeader title="Create" goBack={() => navigation.goBack()} />
        <ScrollView
          style={{flex: 1}}
          keyboardShouldPersistTaps="handle"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={{uri: defaultImage}} />
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input name="name" placeholder="Product Name" />
              <Input name="description" placeholder="Description" />
              <Button
                text="Create"
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

export default CreateProduct;
