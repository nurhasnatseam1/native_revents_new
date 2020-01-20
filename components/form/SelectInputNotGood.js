import React from 'react';
import {TextInput,Picker} from 'react-native';




const SelectInputField=({ input: { onChange,value, ...restInput },...otherProps}) => {
      return (
            <Picker
            selectedValue={value}
            style={{height: 50,alignSelf:'stretch',borderBottomWidth:1,borderBOttomColor:'white' /* width: '100%' */,/* backgroundColor:'white' */}}
            onValueChange={(itemValue, itemIndex) =>
            onChange(itemValue)
            }
            {...restInput}
            {...otherProps}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>
      )
    }


export default SelectInputField;