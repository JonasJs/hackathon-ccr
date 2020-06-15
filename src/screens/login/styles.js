import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #2f3340;
`;

export const Content = styled.View`
  background: #fff;
  border-radius: 16px;
  height: 250px;
  width: 80%;
  margin-top: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.15px;
`;

export const Image = styled.Image``;

export const Description = styled.Text`
  width: 80%;
  text-align: center;
  margin: 20px 0;
`;
