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

import Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-simple-toast';
import loginStyle from './css/mstyle';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginScreen extends Component {
    constructor() {
        super()
    }

    state = {
        isButtonPressed: false,
        email: "",
        password: "",
    }

    handleSignupClick() {

        this.props.navigation.navigate('Signup')

    }

    handleEmail(email) {
        this.setState({
            email: email,
        });
    }
    handlePassword(password) {
        this.setState({
            password: password,
        });
    }

    handleButtonPressed() {

        var email = this.state.email;
        var password = this.state.password;
        // if (email.trim() == "") {
        //     Toast.show('Please enter email');
        //     return;
        // }
        // if (password.trim() == '') {
        //     Toast.show('Please enter password');
        //     return;
        // }

        this.props.navigation.navigate('Tabs');


    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <ImageBackground source={require('../images/screen_bg.jpg')} style={loginStyle.mainContainer}>
                    <LinearGradient colors={['#499687', '#ddd',]}
                        // style={{backgroundColor:'#529599', flexDirection:'column', width:'100%', flex:1, alignSelf:'center', justifyContent:'center',}}
                        style={loginStyle.mainContainer2}
                    >
                        <View
                            style={loginStyle.logoStyle}
                        >
                            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 30 }}>Put Logo Here</Text>
                        </View>
                        <View style={{ padding: 15, marginTop: 30, alignContent: 'stretch' }}>
                            <TextInput
                                style={loginStyle.inputStyle}
                                keyboardType="email-address"
                                placeholder="Enter email"
                                onChangeText={text => this.handleEmail(text)}
                            />
                            <View style={{ height: 20, }} />
                            <TextInput
                                style={loginStyle.inputStyle}
                                secureTextEntry={true}
                                placeholder="Enter password"
                                onChangeText={text => this.handlePassword(text)}
                            />
                            <View style={{ height: 20, }} />
                            <TouchableOpacity
                                activeOpacity={0.5}

                                style={loginStyle.buttonStyle}
                                onPress={() => {
                                    this.handleButtonPressed()
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                    }}

                                >Submit</Text>
                            </TouchableOpacity>
                            <View style={{ height: 20, }} />

                            <View
                                style={{ flexDirection: 'row', alignSelf: 'center', }}
                            >
                                <Text

                                    style={{
                                        color: '#000',

                                    }}
                                >Do'nt have an account ?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.handleSignupClick();
                                    }}
                                >
                                    <Text

                                        style={{
                                            color: '#FFF',
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            marginLeft: 6,
                                        }}
                                    >Sign up here</Text>
                                </TouchableOpacity>

                            </View>


                        </View>
                    </LinearGradient>

                </ImageBackground>
            </SafeAreaView>
        );
    }
}