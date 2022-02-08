/* eslint-disable */

import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacityProps,
  View,
  Image,
  Text,
} from 'react-native';
import EmailImg from '../../assets/carbon_email.png';

import {styles} from './styles';

export default function InputEmail({ setEmail, email }) {

  
  
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.imageText}>Email</Text>
        <Image source={EmailImg} style={styles.icon} />
      </View>
      <TextInput
        value={email}
        style={styles.title}
        onChangeText={setEmail}
        //  onChange={e => setEmail(e.target.value)}
     />
    </View>
  );
}
