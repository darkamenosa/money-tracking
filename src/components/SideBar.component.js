// @flow
import React from 'react'
import { Image, Text } from 'react-native'
import { Container, Content, List, ListItem } from 'native-base'

// prettier-ignore
type Props = {
  navigation: Object,
};

const routes = ['Dashboard', 'Income', 'Expense']

export const SideBar = (props: Props) =>
  <Container>
    <Content>
      <Image
        source={{
          uri:
            'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png',
        }}
        style={{
          height: 120,
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          square
          style={{ height: 80, width: 70 }}
          source={{
            uri:
              'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png',
          }}
        />
      </Image>
      <List
        dataArray={routes}
        renderRow={data =>
          <ListItem button onPress={() => props.navigation.navigate(data)}>
            <Text>
              {data}
            </Text>
          </ListItem>}
      />
    </Content>
  </Container>

SideBar.defaultProps = {
  navigation: {
    navigate: () => {},
  },
}
