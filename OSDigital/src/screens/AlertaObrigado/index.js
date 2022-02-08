import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, KeyboardAvoidingView, Text, Image, useWindowDimensions} from 'react-native'

import VoltarButton from '../../components/ButtonVoltar/index'
import { styles } from './styles'

export default function AlertaObrigado() {
  const navigation = useNavigation()
  const {height} = useWindowDimensions();

  return (
    <KeyboardAvoidingView style={styles.background}>
         <Image 
        source={require('../../assets/check.png')}
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'
        />
      <Text style={styles.title}>Obrigado!</Text>
      <Text style={styles.text}>enviamos um link para você recuperar a sua senha.</Text>
      <View style={styles.container}>
        <VoltarButton
          title="Voltar para Login"
          onPress={() => navigation.navigate('AlertaAlgoErrado')}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
