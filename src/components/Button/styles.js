import styled from 'styled-components/native';
import {screenWidth} from '../../utils/sizes';
export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.8};
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #321e38;
  font-size: 16px;
`;
