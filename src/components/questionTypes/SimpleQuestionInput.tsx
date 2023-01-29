import { StyleSheet } from 'react-native'
import React, { FC, useState, Dispatch, SetStateAction } from 'react'
import { TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getQuestion } from '../../store/slices/questionsListSlice'

export type SimpleQuestionInputProps = {
  onSubmitEditingHandler: Function
  setFocusOne: Dispatch<SetStateAction<boolean>>
}

const SimpleQuestionInput: FC<SimpleQuestionInputProps> = ({onSubmitEditingHandler, setFocusOne}) => {
  const {question} = useSelector((state: RootState)=> state.questionsList)

  const dispatch = useDispatch()

  return (
    <TextInput
      label="Question"
      placeholder='Ecrire la question...'
      mode='outlined'
      outlineColor='#bfc2c5'
      activeOutlineColor='#1DA1F2'
      value={question}
      onChangeText={(text)=> dispatch(getQuestion(text))}
      onSubmitEditing={()=> onSubmitEditingHandler()}
      onFocus={()=> setFocusOne(true)}
      onBlur={()=> setFocusOne(false)}
    />
  )
}

export default SimpleQuestionInput

const styles = StyleSheet.create({})