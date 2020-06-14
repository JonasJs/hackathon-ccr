import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  height: 280px;
  background: #6fb6c4;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Value = styled.Text`
  font-size: 40px;
  color: #fff;
`;

export const Caretdown = styled(Icon)`
  position: absolute;
  bottom: 20;
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const CardContent = styled.View`
  flex-direction: row;
`;

export const CustomButton = styled(Button)`
  background: #6fb6c4;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const TextINSS = styled.Text`
  color: #00696b;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.25px;
`;
