import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { MoneyTracking } from './routes'

class App extends Component {
  render() {
    return <MoneyTracking />
  }
}

AppRegistry.registerComponent('MoneyTracking', () => App)
