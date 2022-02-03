/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { SafeAreaView, Animated } from 'react-native'
import ButtonEntrar from '../../components/ButtonEntrar/index'
import ButtonEsqueceu from '../../components/ButtonEsqueceu/index'
import Logo from '../../components/ImagenOS'
import Inputs from '../../components/Inputs/index'
import InputSenha from '../../components/Inputs/InputSenha/index'
import { styles } from './styles'

export default function App(props) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  return (
    <SafeAreaView style={styles.background}>
      <Logo />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }]
          }
        ]}
      >
        <Inputs />
        <InputSenha />
        <ButtonEntrar title="Entrar" />
        <ButtonEsqueceu
          title="Esqueci minha senha"
          onPress={() => props.navigation.navigate('Recuperar')}
        />
      </Animated.View>
    </SafeAreaView>
  )
}
