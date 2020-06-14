import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;
  border: ${props => (props.border ? '1px solid #d1d1d1' : '0')};
`;
export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;
