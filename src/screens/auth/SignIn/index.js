import React, {useCallback, useRef} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Form} from '@unform/mobile';
import {Container, Back, BackText} from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const formRef = useRef(null);
  const handleSignIn = useCallback((data) => {
    console.log(data);
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
              text="Sign In"
              onPress={() => {
                console.log('press');
                formRef.current.submitForm();
              }}
            />
          </Form>
          <Back onPress={() => navigation.navigate('SignUp')}>
            <BackText>Go to Sign Up</BackText>
          </Back>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
