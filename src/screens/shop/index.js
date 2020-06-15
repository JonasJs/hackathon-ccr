import React, {useState} from 'react';
import CardShop from '../../components/CardShop';
import {Header, Container, Content, Text, Image} from './styles';

export default function Shop({jumpTo}) {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/images/icon.png')} />
      </Header>
      <Content>
        <Text>Parceiros com benefícios</Text>
        <Text>especiais para você</Text>
        <CardShop
          image={require('../../assets/images/unimed-brasil.png')}
          title="Unimed"
          textOne="Planos de saúde a partir de"
          textTwo="R$ xx,00/ mês"
        />
        <CardShop
          image={require('../../assets/images/amil.png')}
          title="Amil Saúde"
          textOne="Planos de saúde a partir de"
          textTwo="R$ xx,00/ mês"
        />
        <CardShop
          image={require('../../assets/images/Previdencia-Privada.png')}
          title="Previdencia Privada"
          textOne="Consulte nossos"
          textTwo=" investimentos"
        />
      </Content>
    </Container>
  );
}
