import React, {useCallback, useContext, useRef} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Form} from '@unform/mobile';
import {AppContext} from '../../../hooks/AppContext';
import {Container, Back, BackText} from './styles';

const SignUp = () => {
  const {setUserData} = useContext(AppContext);
  const navigation = useNavigation();
  const formRef = useRef(null);
  const handleSignIn = useCallback(async (data) => {
    const {name, email, password} = data;
    if (name && email && password) {
      await AsyncStorage.setItem('@Crud-User', JSON.stringify(data));
      setUserData(data);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}
      enable>
      <ScrollView
        style={{flex: 1}}
        keyboardShouldPersistTaps="handle"
        contentContainerStyle={{flex: 1}}>
        <Container>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input name="name" placeholder="Name" />
            <Input
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              placeholder="Email"
            />
            <Input
              name="password"
              secureTextEntry
              icon="lock"
              placeholder="Password"
            />
            <Button
              text="Sign Up"
              onPress={() => {
                formRef.current.submitForm();
              }}
            />
          </Form>
          <Back onPress={() => navigation.navigate('SignIn')}>
            <BackText>Go to Sign In</BackText>
          </Back>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
