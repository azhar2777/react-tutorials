import React, {Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import DashboardScreen from './dashboardscreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
export default class Tabs extends Component {
    render(){
    return (
        
        <Tab.Navigator
        tabBarOptions={{
            labelStyle: {
                fontSize: 16,
                
              },
              activeTintColor:'orange',
              inactiveTintColor:'grey',
              keyboardHidesTabBar:false,
              style:{height:55, paddingVertical:5,            
            }

        }}>
            <Tab.Screen             
            options={{
                activeTintColor: '#FF0000',
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={20} />
                ),
                
                
              }
            }
            name="Dashboard" component={DashboardScreen} />            
            <Tab.Screen 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="search" color={color} size={20} />
                ),
              }}
            name="Search" component={SearchScreen} />            
            <Tab.Screen 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="user" color={color} size={20} />
                ),
              }}
            name="Profile" component={ProfileScreen} />            
        </Tab.Navigator>
    );
    }
  }