import { StyleSheet } from 'react-native'

import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    margin: 16,
    color: '#29ABE2',
    lineHeight: 40
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 16,
    color: '#86C3DD',
    lineHeight: 25
  },
  logo:{
    width: 97,
    maxWidth: 300,
    maxHeight: 200,

  }
})
