/* eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Login from './src/screens/Login';
import Recuperar from './src/screens/RecuperarSenha';
// import Slider from './src/view/Slider'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    StatusBar.setHidden(true),
    (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Login}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/> */}
          <Stack.Screen name="Recuperar" component={Recuperar} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
