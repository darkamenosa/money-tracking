/**
 * The idea from facebook f8app 
 * Ref: https://github.com/fbsamples/f8app/blob/master/js/common/F8StyleSheet.js
 */
import { StyleSheet, Platform } from 'react-native'

function create(styles: Object): { [name: string]: number } {
  const platformStyles = {}

  Object.keys(styles).forEach(name => {
    // eslint-disable-next-line
    let { ios, android, ...style } = { ...styles[name] }

    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios }
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android }
    }
    platformStyles[name] = style
  })

  return StyleSheet.create(platformStyles)
}

export const AppStyleSheet = {
  create,
}
