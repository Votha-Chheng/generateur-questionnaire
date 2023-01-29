import { ScrollView, StyleSheet } from 'react-native'
import React, { FC, useEffect } from 'react'
import {globalStyles} from '../../globalStyles'
import TitreForm from '../components/TitreForm'
import TextPresentationQuestionnaire from '../components/TextPresentationQuestionnaire'
import CreateSectionButton from '../components/CreateSectionButton'
import SectionComponent from '../components/SectionComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Questionnaire } from '../models/questionnaire'
import { v4 as uuidv4 } from 'uuid'
import { getCurrentQuestionnaire } from '../store/slices/questionnairesListSlice'
import { Section } from '../models/section'

const AdminScreen: FC = () => {
  const {questionnairesList, currentQuestionnaire} = useSelector((state: RootState)=> state.questionnairesList)

  const dispatch = useDispatch()

  useEffect(() => {
    //Questionnaire qui va changer
    const newQuestionnaire = new Questionnaire(uuidv4(), [], "")
    dispatch(getCurrentQuestionnaire(newQuestionnaire))

    //Insérer ce questionnaire dans la liste de questionnaires
    // const newList = [...questionnairesList, newQuestionnaire]
    // dispatch(handleQuestionnairesList(newList))
  
  }, [])
  
  return (
    <ScrollView style={[globalStyles.container]}>
      <TitreForm/>
      <TextPresentationQuestionnaire/>
      {
        currentQuestionnaire.sectionsList !== undefined
        ?
        currentQuestionnaire.sectionsList.map((section: Section, index: number)=> (
          <SectionComponent 
            key={index} 
            id={section._id} 
          />
        ))
        :
        null
      }
      <CreateSectionButton/>
    </ScrollView>
  )
}

export default AdminScreen

const styles = StyleSheet.create({
  
})