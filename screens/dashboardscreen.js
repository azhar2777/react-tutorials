import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    FlatList,
  } from 'react-native';
import ItemDashboardList from '../components/ItemDashboardList';
  import dashboardStyle from './css/mstyle';

export default class DashboardScreen extends Component{

    state = {
        mList: [
            {"id":"1"},
            {"id":"2"},
            {"id":"3"},
            {"id":"4"},
            {"id":"5"},
            {"id":"6"},
        ],
    }

    constructor() {
        super()
    }
      render(){
          return(
            <SafeAreaView>
                <ImageBackground source={require('../images/screen_bg.jpg')} style={dashboardStyle.dashboardbanner}>
                   
            <View>
            <Text>Banner Heading Text Here</Text>
            <Text>Banner Sub Heading Text Here</Text>

          </View>
          </ImageBackground>


          
          <FlatList
          style={{marginTop:10,}}
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          data={this.state.mList}
          keyExtractor={item => item.id}
          renderItem={(item)=>{
              return(
                  <ItemDashboardList listItem={{item}}  />
          );}}
          ItemSeparatorComponent={()=>{
              return(<View style={{width:8,}}></View>);
          }
              
          }
          />
          

          
          
          </SafeAreaView>
            //   <SafeAreaView>
            //       <Imagebackround source={require('../images/screen_bg.jpg')} style={dashboardStyle.dashboardbanner}>
            //           <View>
            //             <Text>Banner Heading Text Here</Text>
            //             <Text>Banner Sub Heading Text Here</Text>

            //           </View>
            //       </Imagebackround>
            //   </SafeAreaView>
          );
      }
  }
  


