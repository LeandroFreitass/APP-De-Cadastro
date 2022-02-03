import { StyleSheet } from 'react-native'

import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29ABE2'
  },
  image: {
    width: 220,
    height: 220,
    top: 20,
    marginVertical: 32
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    margin: 15
  },
  title: {
    fontSize: 38,
    color: 'white',
    textAlign: 'center'
  }
})
