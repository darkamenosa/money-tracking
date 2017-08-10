import React from 'react'
import { Text } from 'react-native'
import { Content, Card, CardItem, Body, Button } from 'native-base'
import { HeaderLayout } from 'components'

class Expense extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <HeaderLayout title="Expense" navigation={navigation}>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Hello world</Text>
              </Body>
            </CardItem>
          </Card>

          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </HeaderLayout>
    )
  }
}

export const ExpenseScreen = Expense
