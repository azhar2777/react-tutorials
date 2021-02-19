import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SearchScreen extends Component {
    render(){
        return(
            <View
            style={{
                flex:1,
                backgroundColor:'blue',
                alignContent:'center',
                justifyContent:'center',
            }}
            >
                <Text
                style={{
                    color:'white'
                }}
                >
                    Search Screen 
                </Text>
            </View>
        );
    }
}