import React from 'react';
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps=state=>({
      events:state.firestore.ordered.events
})

class EventDetailedPage extends React.Component{

      render(){
            let event=null;
            if(this.props.events){
                  event=this.props.events[0]
            }
            console.log('consoling event')
            return(
                  <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                        {event?(
                                          <View style={{borderWidth:1,color:'grey'}} >
                                                <Text>title:{event.title}</Text>
                                                <Text>description:{event.description}</Text>
                                                <Text>city:{event.city}</Text>
                                                <Text>venue:{event.venue}</Text>
                                          </View>
                        ):null}
                  </View>
            )
      }
}


export default connect(mapStateToProps)(firestoreConnect((componentProps)=>[{collection:'events',doc:componentProps.navigation.getParam('id')}])(EventDetailedPage))