import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IconButton } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

export type DeleteOrModifyIconsProps = {
  modifyFunction: Function
  deleteFunction: Function
}

const DeleteOrModifyIcons: FC<DeleteOrModifyIconsProps> = ({modifyFunction, deleteFunction}: DeleteOrModifyIconsProps) => {
  return (
    <View style={[globalStyles.flexRow, {marginVertical:0}]}>
      <IconButton
        icon="pencil-box-outline"
        color='orange'
        size={35}
        onPress={()=> modifyFunction()}
        style={{marginHorizontal:0, width:35, borderRadius:7.5}}
      />
      <IconButton 
        style={{marginHorizontal:0, width:35, borderRadius:7.5}}
        icon="minus-box-outline"
        color='red'
        size={35}
        onPress={()=> deleteFunction()}
      />
    </View>
  )
}

export default DeleteOrModifyIcons

const styles = StyleSheet.create({})