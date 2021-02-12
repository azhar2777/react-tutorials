import React, { Component } from 'react';
import {
    StyleSheet,
}  from 'react-native';

export default  loginStyle = StyleSheet.create({
 
    mainContainer:{
      flex: 1,
    },
    mainContainer2:{
        backgroundColor:'transparent', 
        flexDirection:'column', 
        width:'100%', 
        flex:1, 
        alignSelf:'center', 
        justifyContent:'center',
    },
    logoStyle:{
        height: 90,
        backgroundColor:'#e57440',
        marginHorizontal:20,
        borderRadius:9,
        justifyContent:'center',
    },
    inputStyle : {
      height:50,
      borderColor: '#dbeef9',
      elevation:3,
      borderWidth: 1, 
      borderRadius:28,
      paddingHorizontal:14,
      backgroundColor:'#FFF'
  },
  buttonStyle :{
    height:55,
    width:'100%',
    backgroundColor: '#c4112c',
    borderColor: '#f7a8d7', 
    borderWidth: 1, 
    borderRadius:28,
    paddingHorizontal:9,
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
  }
});