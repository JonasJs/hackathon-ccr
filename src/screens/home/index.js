import React, {useState} from 'react';

import ProgressBar from '../../components/ProgressBar';
import Card from '../../components/Card';
import Bar from '../../components/Bar';

import {
  Fab,
  Header,
  Name,
  Container,
  Value,
  Caretdown,
  Content,
  CardContent,
  CustomButton,
  TextINSS,
} from './styles';

export default function Home({jumpTo}) {
  const [name, setName] = useState('Jonas');
  const [amount, setAmount] = useState('2300,00');
  const [INSS, setINSS] = useState('1200,00');

  return (
    <Container>
      <Header>
        <Name>Olá, {name}</Name>
        <Value>R$ {amount}</Value>
        <Name>de lucro.</Name>
        <ProgressBar amount={'5400'} />
        <Caretdown name="arrow-drop-down" size={30} color="#fff" />
      </Header>

      <Content>
        <Card
          title="Gastos na última semana"
          onPress={() => jumpTo('Expenses')}>
          <CardContent>
            <Bar icon="home" background="#DFE085" progress="80%" />
            <Bar
              icon="local-shipping"
              background="#CF2940"
              progress="100%"
              container="60px"
            />
            <Bar
              icon="restaurant"
              background="#85A9E0"
              progress="80%"
              container="50px"
            />
            <Bar
              icon="weekend"
              background="#8B75E2"
              progress="80%"
              container="20px"
            />
          </CardContent>
        </Card>
        <Card title="Arrecadação do INSS">
          <TextINSS>R$ {INSS}</TextINSS>
        </Card>
        <CustomButton
          mode="contained"
          icon="file-document"
          onPress={() => console.log('Pressed')}>
          Cadastro de CTe
        </CustomButton>
      </Content>
    </Container>
  );
}
