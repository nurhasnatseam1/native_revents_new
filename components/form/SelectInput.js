import React from 'react';
import SelectBox  from 'react-native-multi-selectbox';

const SelectInputField=({ input: { onChange,value, ...restInput },...otherProps}) => {
      return (
            <SelectBox
            label="Select"
            options={locations}
            value={value}
            onChange={val => onChange(val) }
            hideInputFilter={false}
            viewMargin="0 0 20px 0"
            {...restInput}
            {...otherProps}
          />
      )
    }


export default SelectInputField;