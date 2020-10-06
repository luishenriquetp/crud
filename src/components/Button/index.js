import React from 'react';
// import {View} from 'react-native';

import {Container, ButtonText} from './styles';

const Button = ({text, ...rest}) => {
  return (
    <Container {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default Button;
