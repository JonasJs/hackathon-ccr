import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  background: #fafafa;
  flex-direction: row;
  border: 1px solid #d1d1d1;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.15px;
  font-weight: bold;
  color: #484c57;
  margin-bottom: 16px;
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 5px;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
`;
