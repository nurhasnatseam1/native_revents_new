import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { ReactReduxContext, connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import EventListItem from '../../components/events/eventItem';


const mapStateToProps=state=>(
      {events:state.firestore.ordered.eventsList}
)

const mapActions={

}

class EventListPage extends React.Component{
      render(){
            console.log(this.props.navigation.navigate)
            return(
                  <View style={styles.container} >
                  <FlatList
                  data={this.props.events}
                  renderItem={(item) => <EventListItem {...item} navigate={this.props.navigation.navigate} />}
                  keyExtractor={item => item.id}
                  />
                  </View>
            )
      }
}

const styles=StyleSheet.create({
      container:{
            flex:1,
            alignSelf:'stretch',
      }
})

export default connect(mapStateToProps,mapActions)(firestoreConnect(()=>[{collection:'events',storeAs:'eventsList'}])(EventListPage))