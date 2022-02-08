import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';

import VoltarButton from '../../components/ButtonVoltar/index';
import OK from '../../components/ButtonEsqueceu/index';
import {styles} from './styles';

export default function AlertaObrigado() {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Image
        source={require('../../assets/cancel.png')}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>Algo deu errado</Text>
      <Text style={styles.text}>
      enviamos um link para você recuperar a sua senha.
      </Text>
      <View style={styles.container}>
        <VoltarButton
          title="Voltar para Login"
          onPress={() => navigation.navigate('Home')}
        />
        <OK title="OK" onPress={() => navigation.navigate('Home')} />
      </View>
    </KeyboardAvoidingView>
  );
}
