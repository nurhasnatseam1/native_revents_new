import React from 'react';
import {TextInput} from 'react-native';




const TextInputField=({ input: { onChange, ...restInput },...otherProps}) => {
      return <TextInput style={{backgroundColor:'white',marginVertical:4,padding:3,paddingHorizontal:5,borderRadius:5}} onChangeText={onChange} {...restInput} {...otherProps} />
    }


export default TextInputField;