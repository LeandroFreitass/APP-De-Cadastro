/* eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Login from './src/screens/Login';
import Recuperar from './src/screens/RecuperarSenha';
// import Slider from './src/view/Slider'
import { UserProvider } from './src/hooks/UserContext';
import HomeScreen from './src/screens/TabNavigator'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    StatusBar.setHidden(true),
    (
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
               <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
              />
              <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
            <Stack.Screen name="Recuperar" component={Recuperar} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    )
  );
}
