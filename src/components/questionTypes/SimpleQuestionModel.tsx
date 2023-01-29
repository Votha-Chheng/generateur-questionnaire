import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { TextInput } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

const SimpleQuestionModel: FC = () => {
  return (
    <View>
      <Text style={globalStyles.labelModel}>Question à poser :</Text>
      <TextInput dense={true} mode='outlined' activeOutlineColor='green' placeholder='Réponse ouverte' />
    </View>
  )
}

export default SimpleQuestionModel

const styles = StyleSheet.create({

})