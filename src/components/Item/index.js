import React from 'react';
import {Divider} from 'react-native-paper';
import {Text, Container, Circle, Title} from './styles';

export default function Card({
  percentage = '0%',
  background = '#dfe085',
  onPress,
  children,
}) {
  return (
    <>
      <Container onPress={onPress}>
        <Circle background={background}>
          <Text>{percentage}</Text>
        </Circle>
        <Title>{children}</Title>
      </Container>
      <Divider />
    </>
  );
}
