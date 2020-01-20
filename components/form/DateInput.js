import React,{Fragment} from 'react';
import {TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns'


const DateInputField=({ input: { onChange, ...restInput },...otherProps}) => {
      console.log(otherProps)
      console.log(otherProps.meta.active)
      if(otherProps.meta.active){
           return  (
                 <Fragment>
                       <TextInput style={{backgroundColor:'white',marginVertical:4,padding:3,paddingHorizontal:5,borderRadius:5}} /* value={new Date(value)?(value?new Date(value).toISOString():new Date().toISOString()):'put a valid date type'} */ onChangeText={onChange} {...restInput}  {...otherProps} />
            <DateTimePicker value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={obj=>onChange(format(new Date(obj.nativeEvent.timestamp),'MM/dd/yyyy'))} 
            />
                 </Fragment>
            
)
      }
      return <TextInput style={{backgroundColor:'white',marginVertical:4,padding:3,paddingHorizontal:5,borderRadius:5}} /* value={new Date(value)?(value?new Date(value).toISOString():new Date().toISOString()):'put a valid date type'} */ onChangeText={onChange} {...restInput}  {...otherProps} />
    }


export default DateInputField;