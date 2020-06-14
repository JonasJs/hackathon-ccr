import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../../components/ProgressBar';
import Card from '../../components/Card';
import Bar from '../../components/Bar';
import Item from '../../components/Item';

import {
  Header,
  Name,
  Container,
  Value,
  Caretdown,
  Content,
  CardContent,
  Text,
} from './styles';

export default function Home({jumpTo}) {
  const [name, setName] = useState('Jonas');
  const [amount, setAmount] = useState('2300,00');

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
        <Icon
          name="keyboard-backspace"
          size={30}
          color="#000"
          onPress={() => jumpTo('Home')}
        />

        <Card title="Gastos na última semana" border={false} activeOpacity={1}>
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
          <Text color="#D95466">
            Você gastou o valor máximo previsto para essa semana no caminhão e
            em outras atividades
          </Text>

          <Text>
            Aproveite o valor economizado em contas fixas e alimentação para
            investir ou guardar o dinheiro.
          </Text>
          <Item percentage="55%">Gastos fixos</Item>
          <Item percentage="55%" background="#8B75E2">
            Aposentadoria
          </Item>
          <Item percentage="15%" background="#CF2940">
            Emergência
          </Item>
          <Item percentage="5%" background="#85A9E0">
            Férias
          </Item>
          <Item percentage="10%" background="#CF2940">
            Educação
          </Item>
          <Item percentage="20%" background="#85A9E0">
            Diversão
          </Item>
        </Card>
      </Content>
    </Container>
  );
}
