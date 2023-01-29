import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../globalStyles'
import { TextInput } from 'react-native-paper'

const SimpleQuestionNumberModel:FC = () => {
  return (
    <View>
      <Text style={globalStyles.labelModel}>Question à poser :</Text>
      <TextInput keyboardType='numeric' dense={true} mode='outlined' activeOutlineColor='green' placeholder='Nombre'/>
    </View>
  )
}

export default SimpleQuestionNumberModel

const styles = StyleSheet.create({})