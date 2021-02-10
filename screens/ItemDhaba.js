import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';
  
  import  Icon from 'react-native-vector-icons/FontAwesome5';

export default class ItemDhaba extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={ styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../images/food1.png')}
                    
                    style={{height:100, width:100, resizeMode:'center', }}
                    />
                </View>
                <View style={{flexDirection:'column', marginLeft:10,}}>
                    <Text>Apna Dhaba</Text>
                    <Text>North Indian Food</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Salt Lake Sec 3</Text>
                        <Icon name="map-marker-alt"  />
                    </View>
                </View>
                
            
          </View>
            
            );
    }
}


const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row', marginTop:20, marginHorizontal:10,
    },
    imageContainer : {
        backgroundColor:'white',
        borderColor:'#d3d3d3',
        borderRadius:9,

    }
});
  