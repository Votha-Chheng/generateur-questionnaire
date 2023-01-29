import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../globalStyles'
import { TextInput } from 'react-native-paper'

const ReponseLongueModel: FC = () => {
  return (
    <View>
      <Text style={globalStyles.labelModel}>Question :</Text>
      <TextInput style={{height:80}} multiline={true} dense={true} mode='outlined' activeOutlineColor='green' placeholder='Réponse longue' />
    </View>
  )
}

export default ReponseLongueModel

const styles = StyleSheet.create({})