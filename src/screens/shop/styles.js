import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  background: #6fb6c4;
  margin-bottom: 16px;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.View`
  padding: 0 20px;
  margin-bottom: 50px;
`;

export const Text = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  letter-spacing: 0.25px;
  color: ${props => props.color || '#2F3340'};
  padding: 0 10px;
`;

export const Image = styled.Image``;
