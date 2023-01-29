import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../globalStyles'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Section } from '../models/section'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { getCurrentQuestionnaire } from '../store/slices/questionnairesListSlice'

const CreateSectionButton: FC = () => {
  const {currentQuestionnaire} = useSelector((state: RootState)=> state.questionnairesList)

  const dispatch = useDispatch()

  const createSection = ()=>{
    const newSection = new Section(uuidv4(), [])
    const temp = [...currentQuestionnaire.sectionsList, newSection]
    dispatch(getCurrentQuestionnaire({...currentQuestionnaire, sectionsList: temp}))
  }

  return (
    <View style={[globalStyles.marginVertical, {alignItems: 'center'}]} >
      <Button icon="plus" color='#97B9DA' mode='contained' style={{width:"100%"}} onPress={()=> createSection()}>
        Ajouter une section
      </Button>
    </View>
  )
}

export default CreateSectionButton

const styles = StyleSheet.create({

})