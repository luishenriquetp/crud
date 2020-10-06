import styled from 'styled-components/native';
import {screenWidth} from '../../utils/sizes';

export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.8};
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background: #3e3b47;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Image = styled.Image`
  width: 72px;
  height: 72px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #f4ede8;
`;

export const Description = styled.Text`
  font-size: 12px;
`;
