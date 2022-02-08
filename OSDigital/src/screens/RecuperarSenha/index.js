import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, KeyboardAvoidingView, Text } from 'react-native'

import VoltarButton from '../../components/ButtonEsqueceu/index'
import RecuperarButton from '../../components/ButtonRecuperar/index'
import Logo from '../../components/ImagenOS'
import Inputs from '../../components/Inputs/index'
import { styles } from './styles'

export default function Recuperar() {
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Logo />
      <Text style={styles.title}>Recuperar senha</Text>
      <Text style={styles.text}>Digite o seu e-mail cadastrado</Text>
      <View style={styles.container}>
        <Inputs style={styles.text} />
        <RecuperarButton title="Recuperar senha" />
        <VoltarButton
          title="Voltar para Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
