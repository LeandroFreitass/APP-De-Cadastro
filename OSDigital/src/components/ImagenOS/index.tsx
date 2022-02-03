import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import { styles } from "./styles";


export default function Logo() {
  return (
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 97,
          height: 105,
        }}
          source={require('../../assets/logo.png')}
        />
      </View>
  )
}
