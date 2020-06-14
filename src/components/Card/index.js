import React from 'react';

import {Text, Container} from './styles';

export default function Card({
  title,
  border = true,
  activeOpacity = 0.2,
  onPress,
  children,
}) {
  return (
    <Container border={border} activeOpacity={activeOpacity} onPress={onPress}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
}
