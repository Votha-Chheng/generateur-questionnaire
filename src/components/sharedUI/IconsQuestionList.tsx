import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IconButton } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'
import { Question } from '../../models/question'
import DeleteOrModifyIcons from './DeleteOrModifyIcons'

export type IconsQuestionListProps = {
  goUpFunction: Function
  goDownFuntion: Function
  modifyFunction: Function 
  deleteFuntion: Function
  questionsList: Question[]
  question: Question
}

const IconsQuestionList: FC<IconsQuestionListProps> = ({goUpFunction, goDownFuntion, modifyFunction, deleteFuntion, questionsList, question}: IconsQuestionListProps) => {

  const checkIndex = (arr: Question[], quest: Question): number=>{
    return arr.map(obj=> obj._id).indexOf(quest._id)
  }

  return (
    <View>
      <IconButton
        style={{alignSelf:"center", marginVertical:0, borderRadius:7.5}}
        icon="chevron-up-box-outline"
        color={checkIndex(questionsList, question) !== 0 ? 'black':'#bfc2c5'}
        size={30}
        onPress={()=> checkIndex(questionsList, question) !== 0 ? goUpFunction() : null}
      />
      <DeleteOrModifyIcons modifyFunction={()=> modifyFunction} deleteFunction={()=>deleteFuntion()} />
      {/* <View style={[globalStyles.flexRow, {marginVertical:0}]}>
        <IconButton 
          style={{marginHorizontal:-2.5, borderRadius:7.5}}
          icon="minus-box-outline"
          color='red'
          size={30}
          onPress={()=> deleteFuntion()}
        />
        <IconButton
          icon="pencil-box-outline"
          color='orange'
          size={35}
          onPress={()=> modifyFunction()}
          style={{marginHorizontal:-2.5, borderRadius:7.5}}
        />
      </View> */}
      <IconButton 
        style={{alignSelf:"center", marginVertical:0, borderRadius:7.5}}
        icon="chevron-down-box-outline"
        color={checkIndex(questionsList, question) !== questionsList.length - 1 ? 'black':'#bfc2c5'}
        size={30}
        onPress={()=> goDownFuntion()}
      />
    </View>
  )
}

export default IconsQuestionList

const styles = StyleSheet.create({})