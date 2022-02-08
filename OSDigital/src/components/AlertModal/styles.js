import { StyleSheet } from 'react-native'

import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  modal: {
    blurRadius: 1,
  },
  closeBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',    
  },
  closeBtn: {
    backgroundColor: '#FFF',
    border: 'none',
    color: '#29ABE2'
  }
})
