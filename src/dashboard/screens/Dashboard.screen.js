// @flow
import React from 'react'
import { View } from 'react-native'
import { Content, Button, Icon, Title, Container } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { AppStyleSheet } from 'utils'
import { WithMenuHeader } from 'components'

// prettier-ignore
type Props = {
  navigation: Object,
};

const styles = AppStyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLarge: {
    fontSize: 50,
  },
})

export class DashboardScreen extends React.Component {
  // prettier-gnore
  static defaultProps = {
    navigation: {
      navigate: () => {},
    },
  }

  static navigationOptions = ({ navigation }: Props) => ({
    header: <WithMenuHeader title="Dashboard" navigation={navigation} />,
  })

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <Content padder>
          <Grid>
            <Row>
              <Col style={styles.center}>
                <View>
                  <Button
                    transparent
                    onPress={() => {
                      navigation.navigate('AddIncome')
                    }}
                  >
                    <Icon style={styles.iconLarge} name="add-circle" />
                  </Button>
                </View>
              </Col>
              <Col style={styles.center}>
                <View>
                  <Button
                    transparent
                    onPress={() => {
                      navigation.navigate('AddExpense')
                    }}
                  >
                    <Icon
                      style={[styles.iconLarge, { color: 'red' }]}
                      name="remove-circle"
                    />
                  </Button>
                </View>
              </Col>
            </Row>

            <Row style={styles.center}>
              <Title>Current: 1000$</Title>
            </Row>
            <Row style={styles.center}>
              <Title>Expense: 50$</Title>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}
