import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  line-height: 45px;
`;

export const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  background: ${props => props.background};
`;

export const Title = styled.Text`
  margin-left: 16px;
`;
