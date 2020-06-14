import React, {useState} from 'react';
import CardShop from '../../components/CardShop';
import {Header, Container, Content, Text, Image} from './styles';

export default function Home({jumpTo}) {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/images/icon.png')} />
      </Header>
      <Content>
        <Text>Parceiros com benefícios</Text>
        <Text>especiais para você</Text>
        <CardShop />
      </Content>
    </Container>
  );
}
