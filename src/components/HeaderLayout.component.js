// @flow
import React from 'react'
import { Container, Title, Button, Icon } from 'native-base'

import { DefaultHeader } from 'components'

// prettier-ignore
type Props = {
  title?: string,
  children?: React.Element<*>,
  navigation?: Object,
};

export const HeaderLayout = ({ title, children, navigation }: Props) =>
  <Container>
    <DefaultHeader
      left={
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      }
      body={
        <Title>
          {title}
        </Title>
      }
    />
    {children}
  </Container>

HeaderLayout.defaultProps = {
  title: '',
  children: null,
  navigation: {
    navigate: () => {},
  },
}
