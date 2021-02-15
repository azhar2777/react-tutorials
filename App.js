/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaiew,
  StyleSheet, 
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './screens/loginscreen';
import SignupScreen from './screens/registrationscreen';
import DashboardScreen from './screens/dashboardscreen';



const Stack = createStackNavigator();

class App extends Component{
  componentDidMount(){

  }
  render(){
    return (
      // <LoginScreen />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }

}


export default App;
