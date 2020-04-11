import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import HistoryScreen from './screen/History';

const BottomTab = createBottomTabNavigator();
export default function Home() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <BottomTab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-paper" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="order"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'My Order',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-paper" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
