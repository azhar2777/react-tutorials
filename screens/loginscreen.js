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
<SafeAreaView style={{flex:1,}}>
        <ImageBackground  source={require('../images/screen_bg.jpg')} style={loginStyle.mainContainer}>
            <View
            style={{backgroundColor:'#bed3ca', flexDirection:'column', width:'100%', flex:1, alignSelf:'center', justifyContent:'center',}}
            >
                <View
                style={{
                    height: 90,
                    backgroundColor:'#e57440',
                    marginHorizontal:20,
                    borderRadius:9,
                    justifyContent:'center'


                }}
                >
                    <Text style={{alignSelf:'center', color:'white', fontSize:30}}>Put Logo Here</Text>
                </View>
                <View style={{ padding: 15, marginTop:30, alignContent:'stretch'}}>
                    <TextInput 
                    style={loginStyle.inputStyle}
                    keyboardType="email-address"
                    placeholder="Enter email"
                    onChangeText={text => this.handleEmail(text)}
                    />
                    <View style={{height:20,}} />
                    <TextInput 
                    style={loginStyle.inputStyle}
                    secureTextEntry={true}
                    placeholder="Enter password"
                    onChangeText={text => this.handlePassword(text)}
                    />
<View style={{height:20,}} />
                   <TouchableOpacity
                    activeOpacity={0.5}
                    
                    style={{
                        height:55,
                        width:'100%',
                        backgroundColor: '#c4112c',
                        borderColor: '#c4112c', 
                        borderWidth: 1, 
                        borderRadius:28,
                        paddingHorizontal:9,
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
        </SafeAreaView>
        );
    }
  }

  const loginStyle = StyleSheet.create({
 
      mainContainer:{
        flex: 1,
      },
      inputStyle : {
        height:50,
        borderColor: '#f2efef', 
        borderWidth: 1, 
        borderRadius:28,
        paddingHorizontal:14,
        backgroundColor:'#FFF'
    }
  });