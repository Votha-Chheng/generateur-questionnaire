import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

const UnSeulChoixModel:FC = () => {
  const [checked, setChecked] = useState<string>('first')

  return (
    <View>
      <Text style={globalStyles.labelModel}>Question :</Text>
      <View style={[globalStyles.flexRow]}>
        <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
        />
        <Text>Réponse 1</Text>
      </View>
      <View style={[globalStyles.flexRow]}>
        <RadioButton
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
        />
        <Text>Réponse 2</Text>
      </View>
      <Text>...</Text>
      
    </View>
  )
}

export default UnSeulChoixModel

const styles = StyleSheet.create({})