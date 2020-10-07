import styled from 'styled-components/native';
import {screenWidth} from '../../utils/sizes';
export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.8}px;
  height: 60px;
  background: #02601c;
  border-radius: 10px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
`;
