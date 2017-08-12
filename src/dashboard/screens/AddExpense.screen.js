import React from 'react'
import { View, Text } from 'react-native'

export class AddExpenseScreen extends React.Component {
  // prettier-ignore
  static defaultProps = {

  };

  // prettier-ignore
  static navigationOptions = {
    title: 'Add Expense',
  }

  render() {
    return (
      <View>
        <Text>Add Expense screen</Text>
      </View>
    )
  }
}
