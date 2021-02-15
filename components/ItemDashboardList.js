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
              <View style={{paddingHorizontal:9, paddingBottom:9, borderRadius:9,  justifyContent:'center', borderWidth:1, width:160, borderColor:'#f8f8f8', backgroundColor:'#f8f8f8', alignItems:'center',}}>
                  <Image source={require('../images/food1.png')}
                  resizeMode='center'                    
                    style={{height:100, width:100, }}
                    />
                    <Text
                    style={
                        {
                            fontSize:18,
                            color:'#262626',
                            fontWeight:'bold',
                        }
                    }
                    >Heading</Text>
                    <Text
                     style={
                         {
                            fontSize:13,
                            alignSelf:'center',
                            textAlign:'center',
                            color:'#262626',                            
                        }
                    }
                >Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.</Text>
              </View>
          );
      }
  }