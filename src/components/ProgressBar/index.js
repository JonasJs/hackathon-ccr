import React from 'react';

import {Text, Container, Progress, Content} from './styles';

export default function ProgressBar({amount}) {
  return (
    <Container>
      <Text>R$</Text>
      <Progress>
        <Content />
      </Progress>
      <Text opacity={0.6}>R$ {amount}</Text>
    </Container>
  );
}
