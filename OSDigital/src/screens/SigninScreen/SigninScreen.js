import React, {useState} from 'react';
import {Image, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/Custominput'
import CustomButtom from '../../components/CustomButton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



const SignInScreen = ({ navigation }) => {
  const [userEmail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  // const onSignInPressd = () => {
  //   console.warn("Entrou")
  // }

  // const onForgotPasswordPressd = () => {
  //   console.warn("onForgotPasswordPressd")
  // }
  return (
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo, {height: height * 0.3}]} 
      resizeMode='contain' />
    
      <CustomInput  placeholder='Email' value={userEmail} setValue={setUseremail}/>
      
      <CustomInput 
      placeholder='Senha' 
      value={password} 
      setValue={setPassword}
      secureTextEntry/>
      <CustomButtom text="Entrar" onPress={() => navigation.navigate('Home')}/>
      <CustomButtom text="Esqueci minha senha" onPress={() => navigation.navigate('Recuperar')} type={'TERTIARY'}/>
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

export default SignInScreen