import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    Alert,
    Button,
    TouchableOpacity,
  } from 'react-native';
  
  import  Icon from 'react-native-vector-icons/FontAwesome5';
  import Toast from 'react-native-simple-toast';


  export default class LoginScreen extends Component{

    state = {
        isButtonPressed:false,
        email:"",
        password:"",
    }
    
    handleEmail(email){
        this.setState({
            email:email,
        });
    }
    handlePassword(password){
        this.setState({
            password:password,
        });
    }

    handleButtonPressed(){

        var email = this.state.email;
        var password = this.state.password;
        if(email.trim() == ""){
            Toast.show('Please enter email');
            return;
        }
        if(password.trim() == ''){
            Toast.show('Please enter password');
            return;
        }
    }

    render(){
        return (

        <ImageBackground  source={require('../images/screen_bg.jpg')} style={loginStyle.mainContainer}>
            <View
            style={{flexDirection:'column', width:'100%', flex:1, alignSelf:'center', justifyContent:'center',}}
            >
                <View
                style={{
                    height: 90,
                    backgroundColor:'#0fadad',
                    marginHorizontal:20,
                    borderRadius:9,
                    justifyContent:'center'


                }}
                >
                    <Text style={{alignSelf:'center', color:'white'}}>Logo</Text>
                </View>
                <View style={{ padding: 15, marginTop:30, alignContent:'stretch'}}>
                    <TextInput 
                    style={{
                        height:40,
                        borderColor: '#e5e5e5', 
                        borderWidth: 1, 
                        borderRadius:7,
                        paddingHorizontal:9,
                    }}
                    keyboardType="email-address"
                    placeholder="Enter email"
                    onChangeText={text => this.handleEmail(text)}
                    />
                    <TextInput 
                    style={{
                        height:40,
                        borderColor: '#e5e5e5', 
                        borderWidth: 1, 
                        borderRadius:7,
                        paddingHorizontal:9,
                        marginTop:10,
                    }}
                    secureTextEntry={true}
                    placeholder="Enter password"
                    onChangeText={text => this.handlePassword(text)}
                    />

                   <TouchableOpacity
                    activeOpacity={0.5}
                    
                    style={{
                        height:40,
                        width:'100%',
                        backgroundColor: '#c4112c',
                        borderColor: '#c4112c', 
                        borderWidth: 1, 
                        borderRadius:7,
                        paddingHorizontal:9,
                        marginTop:10,
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    onPress= {()=>{
                        this.handleButtonPressed()
                    }}                   
                    >
                    <Text
                          style={{
                            color:'#FFFFFF',

                          }}              
                                        
                                        >Submit</Text>
                    </TouchableOpacity> 
                    

                    
                </View>
            </View>

        </ImageBackground>
        );
    }
  }

  const loginStyle = StyleSheet.create({
 
      mainContainer:{
        flex: 1,
      }
  });