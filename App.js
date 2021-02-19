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
import Tabs from './screens/TabScreens';

const Stack = createStackNavigator();



class App extends Component{
  componentDidMount(){

  }
  
  render(){
    return (
      // <LoginScreen />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }

}


export default App;
/*
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TestScreen(props) {
  const gotoHomeStackScreen = () => {
    props.navigation.navigate('Tabs');
};
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Test!</Text>
            <Button title="Go to test home screen" onPress={gotoHomeStackScreen} />
        </View>
    );
}

function HomeScreen(props) {
    const gotoTestStackScreen = () => {
        props.navigation.navigate('Test');
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Test">
                <Stack.Screen name="Test" component={TestScreen} />
                <Stack.Screen name="Tabs" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

*/