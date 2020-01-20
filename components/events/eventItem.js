import React from 'react';
import {Text,View,StyleSheet,TouchableHightlight} from  'react-native';
import { format } from 'date-fns';







const EventListItem=props=>{

      console.log(props)

      return (
      <View style={styles.item} >
            <View style={styles.itemHeader} ><Text style={{textAlign:'center',            fontSize:20,
            fontSize:17,}}>{props.item.title}</Text></View>
            <View style={styles.content}>
                  <View>
                  <Text>title:{props.item.title}</Text>
                  <Text>description:{props.item.description}</Text>
                  <Text>city:{props.item.city}</Text>
                  <Text>venue:{props.item.venue}</Text>
                  </View>
            </View>
      <TouchableHightlight  style={styles.itemBottom} >{<Text style={{textAlign:'center'}} >{+props.item.date.seconds?format(props.item.date.seconds*1000,'MM/dd/yyyy'):'no date'}</Text>}</TouchableHightlight>
      </View>
)}

const styles=StyleSheet.create({
      itemHeader:{
            borderBottomWidth:1,
            borderBottomColor:'grey',
            padding:5,
            textAlign:'center',

      },
      item:{
            borderWidth:1,
            marginVertical:6,
            padding:2,
            alignSelf:'stretch',
            backgroundColor:'white',
            borderColor:'grey',
      },
      content:{

      },
      itemBottom:{
            borderTopWidth:1,
            borderTopColor:'grey',
      }
})


export default EventListItem;