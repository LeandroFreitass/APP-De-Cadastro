import React from 'react'
import { View, StyleSheet, Image, useWindowDimensions} from 'react-native'
import { styles } from "./styles";


export default function Logo() {
  const {height} = useWindowDimensions();

  return (
      <View>
        <Image 
        source={require('../../assets/logo.png')}
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'
        />
      </View>
  )
}
