import React from 'react';
import {View,Text} from 'react-native';
import { ReactReduxContext } from 'react-redux';




export default class EventListPage extends React.Component{
      componentDidMount=()=>{
            this.props.navigation.navigate('user')
      }
      render(){
            return(
                  <View>
                        <Text>EventListPage</Text>
                  </View>
            )
      }
}