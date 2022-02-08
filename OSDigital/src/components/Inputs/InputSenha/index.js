/* eslint-disable */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  InputArea,
  Input,
  TouchIcon,
  IconWrapper,
  ImageIcon,
  ImageText,
} from './styles';
import SenhaImg from '../../../assets/carbon_password.png';

export default function Insenha({password, setPassword}) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <InputArea>
      <IconWrapper>
        <ImageText>senha</ImageText>

        <ImageIcon source={SenhaImg} />
      </IconWrapper>
      <Input
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass}
      />
      <TouchIcon onPress={() => setHidePass(!hidePass)}>
        {hidePass ? (
          <Icon name="eye" color="#29ABE2" size={25} />
        ) : (
          <Icon name="eye-off" color="#29ABE2" size={25} />
        )}
      </TouchIcon>
    </InputArea>
  );
}
