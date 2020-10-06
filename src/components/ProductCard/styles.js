import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const Image = styled.Image``;

export const Content = styled.View`
  padding: 0 5px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 12px;
`;
