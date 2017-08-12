// @flow
import React from 'react'
import { Header, Left, Right, Body } from 'native-base'

// prettier-ignore
type Props = {
  left?: React.Element<*>,
  body?: React.Element<*>,
  right?: React.Element<*>,
};

export const DefaultHeader = ({ left, body, right, ...props }: Props) =>
  <Header {...props}>
    <Left>
      {left}
    </Left>
    <Body>
      {body}
    </Body>
    <Right>
      {right}
    </Right>
  </Header>

DefaultHeader.defaultProps = {
  left: null,
  body: null,
  right: null,
}
