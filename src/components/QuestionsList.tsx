import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { globalStyles } from '../../globalStyles'
import IconsQuestionList from './sharedUI/IconsQuestionList'
import { IconButton, TextInput } from 'react-native-paper'
import DeleteOrModifyIcons from './sharedUI/DeleteOrModifyIcons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getQuestionsList } from '../store/slices/questionsListSlice'

export type QuestionsListProps = {

}

const QuestionsList: FC<QuestionsListProps> = ({}: QuestionsListProps) => {
  const {questionsList} = useSelector((state: RootState)=> state.questionsList)

  const [questionToModify, setQuestionToModify] = useState<number|null>(null)

  const dispatch = useDispatch()

  const swapElement = (id: number, upOrDown: "up"|"down")=>{
    let tempArray = [...questionsList]

    if(upOrDown === "up"){
      const index = questionsList.findIndex(question => question._id === id)
      tempArray[index] = [tempArray[index-1], tempArray[index-1] = tempArray[index]][0]

    }
    if(upOrDown === "down"){
      const index = questionsList.findIndex(question => question._id === id)
      tempArray[index] = [tempArray[index+1], tempArray[index+1] = tempArray[index]][0]
    }

    dispatch(getQuestionsList(tempArray))
  }

  const handleDelete = (id: number)=>{
    const newQuestionList = questionsList.filter(question => question._id !== id)
    dispatch(getQuestionsList(newQuestionList))
  }

  return (
    <View>
      {
        questionsList.map((question, index) => (
          <View key={index} style={[globalStyles.blur, globalStyles.flexRow, {borderColor:"black", alignItems:"center", justifyContent:"space-between", marginVertical:10}]}>
            {
              questionToModify === question._id
              ?
              <View>
                <TextInput value={question.question} style={{fontSize:20, color: "black"}} placeholder="Ecrire la question..."/>
                <Text style={{fontSize:20, color: "black"}}>&#8594; Type de réponse : {question.typeOfAnswer}</Text>
                {
                  question.type === 4 || question.type === 5
                  ?
                  question.choiceList?.map((choice, index)=> (
                    <View key={index}>
                      <TextInput value={choice}/>
                      <DeleteOrModifyIcons modifyFunction={()=> console.log("modify")} deleteFunction={()=> console.log("delete")} />
                    </View>
                  ))
                  :
                  null
                }
                <Text style={{fontSize:20, color: "black"}}>&#8594; {question.reponseObligatoire ? "Réponse obligatoire" : "Réponse facultative"}</Text>
              </View>
              :
              <View>
                <Text style={{fontSize:20, color: "black"}}>&#8227; {question.question}</Text>
                <Text style={{fontSize:20, color: "black"}}>&#8594; Type de réponse : {question.typeOfAnswer}</Text>
                {
                  question.type === 5 || question.type === 6
                  ?
                  <Text style={{fontSize:20, color: "black"}}>&#8227; {question.question}</Text>
                  :
                  null
                }
                <Text style={{fontSize:20, color: "black"}}>&#8594; {question.reponseObligatoire ? "Réponse obligatoire" : "Réponse facultative"}</Text>
              </View>
            }
            <IconsQuestionList 
              goUpFunction={()=>swapElement(question._id, "up")} 
              goDownFuntion={()=>swapElement(question._id, "down")} 
              deleteFuntion={()=> handleDelete(question._id)} 
              modifyFunction={()=>console.log("modify")} 
              questionsList={questionsList}
              question={question}
            />          
          </View>
        ))
      }
    </View>
  )
}

export default QuestionsList

const styles = StyleSheet.create({})