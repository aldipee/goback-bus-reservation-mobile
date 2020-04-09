import React, {Component} from 'react';
// In ReactNativewe have to import all from react nativeitsel
// View is like div in Website
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/Home';

import Login from './src/screen/Login';
import Schedules from './src/screen/SchedulesListsScreen';
import SignUp from './src/screen/SignUp';
import Calendar from './src/screen/Date';

const Stack = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();

// class BottomStack extends Component {
//   render() {
//     return (
//       <BottomNavigator.Navigator>
//         <BottomNavigator.Screen
//           component={Home}
//           name="homePage"
//           options={{title: 'HomeScreen', tabBarLabel: 'Hoem'}}
//         />
//         <BottomNavigator.Screen
//           component={Profile}
//           name="profilePage"
//           options={{title: 'ProfilePage', tabBarLabel: 'Binggo'}}
//         />
//       </BottomNavigator.Navigator>
//     );
//   }
// }

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{title: 'Home', headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Calendar"
            options={{title: 'Home', headerShown: false}}
            component={Calendar}
          />
          <Stack.Screen
            name="Schedules"
            options={{title: 'Home', headerShown: false}}
            component={Schedules}
          />
          <Stack.Screen
            name="LoginScreen"
            options={{title: 'Login', headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name="SignUp"
            options={{title: 'SignUp', headerShown: false}}
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
