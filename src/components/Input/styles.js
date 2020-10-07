import {screenWidth} from '../../utils/sizes';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${screenWidth * 0.8}px;
  background: #232129;
  height: 60px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
`;
