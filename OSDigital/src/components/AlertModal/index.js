import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {View,Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import {styles} from './styles'

function AlertModal ({visible, setVisible, message}) {
  const navigation = useNavigation()

  return (
    <Modal isVisible={visible} style={styles.modal}>
      <View style={{display: 'flex', flexDirection: 'column', padding: 100}}>
        <View style={styles.closeBtnContainer}>    
          <Button style={styles.closeBtn} title='fechar' onPress={() => { setVisible(false)}}/>
        </View>
        <View style={{backgroundColor: 'white', height: 100}}>
          <Text>{message}</Text>
          <Button title='Tentar novamente' onPress={() => { setVisible(false)}}/>
          <Button title='Redefinir senha' onPress={() => navigation.navigate('Recuperar')}/>
        </View>
      </View>      
    </Modal>
  );
};

export default AlertModal;
