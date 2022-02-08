import { StyleSheet } from 'react-native'

import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  buttonEntrar: {
    backgroundColor: theme.colors.primary,
    width: 321,
    height: 51.91,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 19
  },
  title: {
    color: theme.colors.secondary100,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '400'
  }
})
