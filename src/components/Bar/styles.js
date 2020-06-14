import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const Progress = styled.View`
  background: #e3e3e3;
  height: ${props => props.container};
  width: 50px;
  justify-content: flex-end;
  margin-bottom: 8px;
`;
export const Content = styled.View`
  background: ${props => props.background};
  height: ${props => props.progress};
`;
