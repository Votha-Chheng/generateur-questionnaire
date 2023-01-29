import { Text, View } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../globalStyles'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ChoixMultipleModel: FC = () => {

  return (
    <View>
      <Text style={globalStyles.labelModel}>Question :</Text>
      <BouncyCheckbox
        style={{marginBottom:10}}
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Réponse 1"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine:"none" }}
      />

      <BouncyCheckbox
        style={{marginBottom:10}}
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Réponse 2"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine:"none"}}
      />
      <Text>...</Text>
    </View>
  )
}

export default ChoixMultipleModel
