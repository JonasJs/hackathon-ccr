import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, Title, Description, Content, Container, Image} from './styles';

export default function CardShop({}) {
  return (
    <Container>
      <Image source={require('../../assets/images/unimed-brasil.png')} />
      <Content>
        <Title>Unimed</Title>
        <Text>
          <Description>Planos de saúde a partir</Description>
          <Description>de R$ xx,00/ mês</Description>
        </Text>
      </Content>
    </Container>
  );
}
