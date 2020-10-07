import styled from 'styled-components/native';
import {screenWidth} from '../../../utils/sizes';
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background: #312e38;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f4ede8;
`;
export const Image = styled.Image`
  width: ${screenWidth * 0.8}px;
  height: ${screenWidth * 0.8}px;
`;
export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #f4ede8;
  margin-top: 30px;
`;
export const CardActions = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
`;
export const Action = styled.TouchableOpacity`
  width: 100px;
  border-width: 1px;
  border-color: #fafafa;
  padding: 20px;
  border-radius: 5px;
  margin-top: 30px;
`;
export const ActionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f4ede8;
`;
