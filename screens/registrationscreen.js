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
  import loginStyle  from './css/mstyle';


  export default class SignupScreen extends Component{

    state = {
        isButtonPressed:false,
        name:"",
        phone:"",
        email:"",
        password:"",
    }

    handleLoginClick(){
        Toast.show("Go To Login.");

    }

    handleName(name){
        this.setState({
            name:name,
        });
    }
    handlePhone(mPhone){
        this.setState({
            phone:mPhone,
        });
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
                    style={loginStyle.mainContainer2}
                    >
                        

                        <ScrollView>

                        <View style={{height:50,}} />
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
                            keyboardType="default"
                            placeholder="Enter name"
                            onChangeText={text => this.handleName(text)}
                            />
                            <View style={{height:20,}} />
                            <TextInput 
                            style={loginStyle.inputStyle}
                            keyboardType="email-address"
                            placeholder="Enter email"
                            onChangeText={text => this.handleEmail(text)}
                            />
                            <View style={{height:20,}} />
                            <TextInput 
                            style={loginStyle.inputStyle}
                            keyboardType="phone-pad"
                            placeholder="Enter phone"
                            onChangeText={text => this.handlePhone(text)}
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
                            
                            style={loginStyle.buttonStyle}
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
                            <View style={{height:20,}} />
                            <View
                    style={{flexDirection:'row', alignSelf:'center',}}
                    >
                    <Text
                    
                    style={{
                        color:'#000000',
                       
                    }}
                    >Already have an account ?</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.handleLoginClick();
                        }}
                    >
                        <Text
                        
                        style={{
                            color:'#FF0000',
                            alignSelf:'center',
                            marginLeft:6,
                        }}
                        >Login here</Text>
                    </TouchableOpacity>
                    
                    </View>
                            

                            
                        </View>
                        </ScrollView>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        
        );
    }
  }

  