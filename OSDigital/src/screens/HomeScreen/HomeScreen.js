import React from 'react';
import {View, Text, StyleSheet,  } from 'react-native';

const HomeScreen = () => {
  
  return (
    <View style={styles.root}>
      <Text>Bem vindo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 30,
    marginTop: 60
  },
  logo:{
    width: 97,
    maxWidth: 300,
    maxHeight: 200
  }
})

export default HomeScreen