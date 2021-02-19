import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ProfileScreen extends Component {
    render(){
        return(
            <View
            style={{
                flex:1,
                backgroundColor:'blue',
                alignContent:'center',
            }}
            >
                <Text
                style={{
                    color:'white'
                }}
                >
                    Profile Screen 
                </Text>
            </View>
        );
    }
}