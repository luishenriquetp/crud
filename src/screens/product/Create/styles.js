import styled from 'styled-components/native';
import {screenWidth} from '../../../utils/sizes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #312e38;
`;
export const Image = styled.Image`
  width: ${screenWidth * 0.8}px;
  height: ${screenWidth * 0.8}px;
`;
