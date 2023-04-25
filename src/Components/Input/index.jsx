import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { styles } from './style'

const Input = ({placeholder, value, onChangeText, buttonColor, buttonTitle, onAddList}) => {

  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input} 
          value={value} 
          onChangeText={onChangeText}/>
        <Button title={buttonTitle} color={buttonColor} onPress={onAddList}/>
    </View>
  )
}

export default Input