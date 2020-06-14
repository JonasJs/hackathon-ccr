import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  color: #fff;
  opacity: ${props => props.opacity || 1};
`;
export const Progress = styled.View`
  height: 4px;
  width: 60%;
  background: #ccded4;
  margin: 0 8px;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 30%;
  height: 100%;
  background: #2f3340;
  border-radius: 10px;
`;
