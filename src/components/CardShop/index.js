import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, Title, Description, Content, Container, Image} from './styles';

export default function CardShop({textOne = '', textTwo = '', title, image}) {
  return (
    <Container>
      <Image source={image} />
      <Content>
        <Title>{title}</Title>
        <Description>{textOne}</Description>
        <Description>{textTwo}</Description>
      </Content>
    </Container>
  );
}
