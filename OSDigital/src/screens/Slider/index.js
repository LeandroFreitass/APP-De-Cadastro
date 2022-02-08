/* eslint-disable */
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

import { styles } from './styles'

const slides = [
  {
    key: 1,
    title: 'Tudo online',
    text: 'Para sua oficina, autocenter ou autopeças',
    image: require('../assets/sliderImagens/qual=imagem1.png')
  },
  {
    key: 2,
    title: 'Praticidade',
    text: 'A organização do seu negócio automotivo todo em um só lugar.',
    image: require('../assets/sliderImagens/qual=imagem2.png')
  },
  {
    key: 3,
    title: 'Gerencie',
    text: 'O seu negócio automotivo com apenas alguns cliques!',
    image: require('../assets/sliderImagens/qual=imagem3.png')
  }
]

export default function Slider({ navigation }) {
  const [showHome, setShowHome] = useState(false)

  function renderSlides({ item }) {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }
  return <AppIntroSlider 
  renderItem={renderSlides} 
  data={slides} 
  bottomButton/>
}
