import React from 'react'
import { DefaultHeader } from 'components'
import { Title, Button, Icon } from 'native-base'

// prettier-ignore
type Props = {
  title?: string,
  navigation?: Object,
  right: React.Element<*>
};

export const WithMenuHeader = ({ title, navigation, right }: Props) =>
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
    right={right}
  />

WithMenuHeader.defaultProps = {
  title: '',
  right: null,
  navigation: {
    navigate: () => {},
  },
}
