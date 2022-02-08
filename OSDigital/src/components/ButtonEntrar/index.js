/* eslint-disable */

import React, {useState} from  'react'
import { Text, TouchableOpacity, View, Button } from 'react-native'
import { styles } from './styles'
import Modal from 'react-native-modal';
// import Modal from '../modal'


// type Props = TouchableOpacityProps & {
//   title: string;
//   handleLogin: (e: Event) => void
// }

export default function ButtonIcon({ title, handleLogin, ...rest }) {  

  
  return (    
    <View>
    <TouchableOpacity  onPress={handleLogin} style={styles.buttonEntrar} {...rest} >
      <Text style={styles.title}>{title}</Text>      
    </TouchableOpacity>
   

    </View>
    
  )

}
