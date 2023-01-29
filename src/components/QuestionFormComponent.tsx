import { StyleSheet, Text, View } from 'react-native'
import React, { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { IconButton, RadioButton, Switch } from 'react-native-paper'
import { globalStyles } from '../../globalStyles'
import { Question } from '../models/question'
import { checkInput } from '../utils'
import SimpleQuestionInput from './questionTypes/SimpleQuestionInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getQuestion, getQuestionsList, selectQuestionType } from '../store/slices/questionsListSlice'
import RadioComponent from './sharedUI/RadioComponent'

export type QuestionFormComponentProps = {
  setAddQuestionMode: Dispatch<SetStateAction<boolean>>
  setInputQuestionMode: Dispatch<SetStateAction<boolean>>
}

const QuestionFormComponent:FC<QuestionFormComponentProps> = ({setInputQuestionMode, setAddQuestionMode}: QuestionFormComponentProps) => {
  const {questionsList, question, selectedTypeOfQuestion} = useSelector((state: RootState)=> state.questionsList)
  const {sectionsList} = useSelector((state: RootState)=> state.sectionsList)

  const [focusOne, setFocusOne] = useState<boolean>(false)
  const [answerType, setAnswerType] = useState<"Numérique"|"Code postal"|"Texte court"|"Long texte"|"Téléphone"|"E-mail"|"Date"|"Adresse"|"Choix multiple">("Texte court")
  const [obligatoire, setObligatoire] = useState<boolean>(false)
  const [choiceList, setChoiceList] = useState<string[]|undefined>(undefined)
  const [singleExtraAnswer, setSingleExtraAnswer] = useState<string|undefined>(undefined)
  const [multipleExtraAnsers, setMultipleExtraAnsers] = useState<string[]|undefined>(undefined)

  const dispatch = useDispatch()

  useEffect(() => {
    if(selectedTypeOfQuestion){
      getTypeOfQuestion(selectedTypeOfQuestion)
    }
  }, [selectedTypeOfQuestion])
  

  const insertNewQuestionInList = ()=>{
    if(selectedTypeOfQuestion !== undefined && question){
      const newQuestion = new Question(Date.now(), selectedTypeOfQuestion, question, answerType, obligatoire, choiceList, singleExtraAnswer, multipleExtraAnsers)
      const newQuestionsList = [...questionsList, newQuestion]
      dispatch(getQuestionsList(newQuestionsList))
      setInputQuestionMode(false)
      setAddQuestionMode(false)
      dispatch(getQuestion(""))
      dispatch(selectQuestionType(undefined))
      
    }
  }

  const getTypeOfQuestion = (selectedTypeOfQuestion: number )=>{
    switch(selectedTypeOfQuestion){
      case 2 : setAnswerType("Numérique")
        break;
      case 3 : setAnswerType('Long texte')
        break;
      case 4 : setAnswerType('Date')
        break;
      case 5 : setAnswerType('Choix multiple')
      case 6 : setAnswerType('Choix multiple')
        break;
      default : setAnswerType('Texte court')
        return
    }
  }

  const checkFunctionForRadioButton = (stateValue: any, value: string): "checked"|"unchecked" =>{
    return stateValue === value ? 'checked':"unchecked"
  } 

  return (
    <View style={[globalStyles.blur, {marginTop:10, paddingTop:5, borderColor:`${!focusOne ? "#1DA1F2":"#bfc2c5"}` }]}>
      <View style={[globalStyles.flexRow, {alignSelf:"center"}]}>
        <IconButton 
          style={{marginTop:-10}}
          icon="minus-box-outline"
          color='red'
          size={35}
          onPress={()=> setInputQuestionMode(false)}
        />
        <IconButton
          style={{marginTop:-10}}
          icon="checkbox-outline" 
          size={35} 
          color={checkInput(question) ? "green" : "#bfc2c5"}
          onPress={()=> checkInput(question) && insertNewQuestionInList()}
        />
      </View>
      {
        <View>
          <SimpleQuestionInput 
            onSubmitEditingHandler={()=> checkInput(question) && insertNewQuestionInList()} 
            setFocusOne={setFocusOne} 
          />
          {
            selectedTypeOfQuestion === 1
            ?
            <View style={{marginTop:10}}>
              <Text style={{fontSize:20, color: "black", marginBottom:10}}>
                &#8594; Type de réponse en lettres : 
              </Text>
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Texte court" checkedFunction={checkFunctionForRadioButton(answerType, "Texte court")} label="Texte court" />
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Texte long" checkedFunction={checkFunctionForRadioButton(answerType, "Texte long")}  label="Texte long (+ de 60 signes)"/>
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="E-mail" checkedFunction={checkFunctionForRadioButton(answerType, "E-mail")}  label="E-mail"/>
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Adresse" checkedFunction={checkFunctionForRadioButton(answerType, "Adresse")}  label="Adresse"/>              
            </View>
            :
            selectedTypeOfQuestion === 2
            ?
            <View style={{marginTop:10}}>
              <Text style={{fontSize:20, color: "black", marginBottom:10}}>
                &#8594; Type de réponse numériques : 
              </Text>
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Numérique" checkedFunction={checkFunctionForRadioButton(answerType, "Numérique")} label="Numérique simple" />
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Code postal" checkedFunction={checkFunctionForRadioButton(answerType, "Code postal")} label="Code postal"/>
              <RadioComponent setter={setAnswerType} stateValue={answerType} value="Téléphone" checkedFunction={checkFunctionForRadioButton(answerType, "Téléphone")}  label="Numéro de téléphone"/>             
            </View>
            :
            null
          }
        </View>
      }
      <View style={[globalStyles.flexRow, {marginTop:15}]}>
        <Text style={{fontSize:20, color:`${obligatoire ? "red":"#bfc2c5"}`, marginHorizontal:5}}>&#8594; Réponse obligatoire</Text>
        <Switch value={obligatoire} onValueChange={()=>setObligatoire(prev=> !prev)} color="red" style={{alignSelf:'flex-end'}} />
      </View>
      
    </View>
  )
  
}

export default QuestionFormComponent

const styles = StyleSheet.create({})