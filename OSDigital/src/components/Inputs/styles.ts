import { StyleSheet } from 'react-native'

import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 270,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary
  },
  title: {
    width: '80%',
    height: 50,
    color: theme.colors.secondary100,
    padding: 8,
    fontSize: 18,
    textDecorationColor: theme.colors.secondary100
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: theme.colors.primary
  },
  icon: {
    width: 20,
    height: 20,
    right: 20
  },
  imageText: {
    right: 16,
    margin: 5,
    color: theme.colors.primary
  }
})
