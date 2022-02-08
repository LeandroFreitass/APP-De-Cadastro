import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../HomeScreen/HomeScreen';
import BellScreen from '../BellScreen/BellScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';


import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#FFF'},
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={() => ({
          tabBarStyle: {
            backgroundColor: '#FFF',
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Bell"
        component={BellScreen}
        options={{
          tabBarBadgeStyle: {backgroundColor: '#000'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
