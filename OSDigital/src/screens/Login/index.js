/* eslint-disable */

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import ButtonEntrar from '../../components/ButtonEntrar/index';
import ButtonEsqueceu from '../../components/ButtonEsqueceu/index';
import Logo from '../../components/ImagenOS';
import InputEmail from '../../components/Inputs/index';
import InputSenha from '../../components/Inputs/InputSenha/index';
import api from '../../services/api';
import {styles} from './styles';

import AsyncStorage from '@react-native-community/async-storage';

import Modal from '../../components/AlertModal';

import { useUser } from '../../hooks/UserContext';

const API_URL =
  Platform.OS === 'ios'
    ? 'https://osdigapi.carrook.com.br:21061'
    : 'https://osdigapi.carrook.com.br/';

export default Login = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(true);

  const user = useUser();

  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

 
  // animação Login ---------------------
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  // animação Login ---------------------
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
   //--------------------------------

   // LoginAuth ---------------------
  async function handleLogin() {
    if (!email || !password) {
      console.warn('Preencha todos os campos!');
      return;
    }

    try {
      const login = await api.post('/users/authenticate', {
        Email: email, 
        User_Password: password, 
      })

      if (login.status !== 200) {
        setMessage("E-mail ou Senha inválidos!")
        setIsModalOpen(true)
        return;
      } 

      AsyncStorage.clear()
      AsyncStorage.setItem('TOKEN', user.Device_Id)
      console.warn('LOGADO!')    
    } catch (err) {
      console.warn('Erro: ' + err.message)
    }
    
  }
 //--------------------------------
  return (
    // animação Login ---------------------
    <SafeAreaView style={styles.background}>
      <Logo />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        {/* ---------------------------------------- */}
       
        <InputEmail email={email} setEmail={setEmail} />
        <InputSenha password={password} setPassword={setPassword} />
        <ButtonEntrar title="Entrar" handleLogin={handleLogin}  />
        <ButtonEsqueceu
          title="Esqueci minha senha"
          onPress={() => navigation.navigate('Recuperar')}
        />
      </Animated.View>
      <Modal 
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        message={message}
      />
    </SafeAreaView>
  );
};
