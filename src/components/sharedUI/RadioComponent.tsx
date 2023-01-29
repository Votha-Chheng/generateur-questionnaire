import { StyleSheet, Text, View } from 'react-native'
import React, { FC, Dispatch, SetStateAction } from 'react'
import { RadioButton } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

export type RadioComponentProps = {
  checkedFunction: "checked"|"unchecked"
  setter: Dispatch<SetStateAction<any>>
  stateValue: string
  value: string
  label: string
}
const RadioComponent: FC<RadioComponentProps> = ({checkedFunction, setter, stateValue, value, label}: RadioComponentProps) => {
  return (
    <View style={[globalStyles.flexRow, {alignItems:'center'}]}>
      <RadioButton
        value="short text"
        status={checkedFunction}
        onPress={()=> setter(value)}
        color="green"
      />
      <Text style={{fontSize:17.5, color:`${stateValue === value ? "black": "grey"}`}}>{label}</Text>
    </View>
  )
}

export default RadioComponent

const styles = StyleSheet.create({})