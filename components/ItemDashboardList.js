import React, { Component } from 'react';
import {   
    View,
    Text,
    Image,
  } from 'react-native';
  
  import  Icon from 'react-native-vector-icons/FontAwesome5';
  export default class ItemDashboardList extends Component {
      constructor(props){
          super(props);
      }
      render(){
          return (
              <View style={{borderWidth:2, borderColor:'red', alignItems:'center',}}>
                  <Image source={require('../images/food1.png')}
                    
                    style={{height:100, width:100, resizeMode:'center', resizeMode='center'}}
                    />
                    <Text>Hello</Text>
              </View>
          );
      }
  }