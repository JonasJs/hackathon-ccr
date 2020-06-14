import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Progress, Content, Container} from './styles';

export default function Card({
  icon,
  background = '#EDECEC',
  progress = '0%',
  container = '100px',
}) {
  return (
    <Container>
      <Progress container={container}>
        <Content background={background} progress={progress} />
      </Progress>
      <Icon name={icon} size={30} color="#000" />
    </Container>
  );
}
