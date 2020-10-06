import styled from 'styled-components/native';
import {screenWidth} from '../../utils/sizes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
  background: #312e38;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  line-height: 28px;
`;
export const HeaderAction = styled.TouchableOpacity``;

export const ListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
`;

export const EmptyList = styled.TouchableOpacity``;

export const EmptyListText = styled.Text`
  font-size: 16px;
  margin-bottom: 24px;
  color: #f4ede8;
`;
