// @flow
import React from 'react'
import {
  Container,
  Header,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Body,
} from 'native-base'

// prettier-ignore
type Props = {
  title?: string,
  children?: React.Element<*>,
  navigation?: Object,
};

export const HeaderLayout = ({ title, children, navigation }: Props) =>
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>
          {title}
        </Title>
      </Body>
      <Right />
    </Header>
    {children}
  </Container>

HeaderLayout.defaultProps = {
  title: '',
  children: null,
  navigation: {
    navigate: () => {},
  },
}
