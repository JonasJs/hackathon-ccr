import React from 'react';
import {Container, Image, Content, Title, Description} from './styles';
import {Button} from 'react-native-paper';

export default function Login({jumpTo}) {
  return (
    <Container>
      <Image source={require('../../assets/images/logo.png')} />
      <Content>
        <Title>Bem vindo ao Pé de Meia</Title>
        <Description>
          Você terá planejamento e controle dos fretes e investimentos.
        </Description>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{
            borderWidth: 0,
            borderRadius: 30,
            backgroundColor: '#6FB6C4',
            marginBottom: 16,
          }}
          labelStyle={{color: '#fff'}}
          contentStyle={{
            width: '100%',
          }}>
          login com telefone
        </Button>
        <Button
          mode="outlined"
          onPress={() => console.log('Pressed')}
          style={{borderWidth: 0, backgroundColor: '#fff'}}
          labelStyle={{color: '#6FB6C4'}}
          contentStyle={{
            width: '100%',
            borderWidth: 2,
            borderRadius: 30,
            borderColor: '#6FB6C4',
          }}>
          login com email
        </Button>
      </Content>
    </Container>
  );
}
