import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView,Button } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import TextInputField from '../../components/form/TextInput';
import { createEvent } from '../../store/actions/eventsActions';
import { connect } from 'react-redux';
import DateInputField from '../../components/form/DateInput';
import TimeInputField from '../../components/form/TimeInput';
import SelectInputField from '../../components/form/SelectInputNotGood';



const mapDispatchToProps={
      createEvent
}


class EventForm extends React.Component{


      onSubmit=values=>{
            this.props.createEvent(values)
      }

      render(){
            return (
                  <View style={styles.container}>
                        <KeyboardAvoidingView  behavior='padding' style={{flex:1,justifyContent:'center',alignItems:'center'}} keyboardVerticalOffset={50} >
       
                        <View  >
                          <Field name='title' placeholder='Give your event a name' component={TextInputField} ></Field>
                          <Field name='category' placeholder='what is  your event about' component={SelectInputField}  />
                          <Field name='description' placeholder='tell us about your event' component={TextInputField} multiline={true} numberOfLines={4} />
                          <Field name='city' placeholder='Event City' component={TextInputField}  />
                          <Field name='venue' placeholder='Event Venue' component={TextInputField}  />
                          <Field name='date' placeholder='Event date' component={DateInputField}  />
                          <Field name='time' placeholder='Event time' component={TimeInputField}  />
                          <Button onPress={this.props.handleSubmit(this.onSubmit)} title='create event' ></Button>
                        </View>
                        </KeyboardAvoidingView>
                     
                  </View>
            )
      }
}


const styles=StyleSheet.create({
      container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
      }
})

export default connect(null,mapDispatchToProps)(reduxForm({form:'newEvent'})(EventForm))