import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react'
import SimpleQuestionModel from './questionTypes/SimpleQuestionModel'
import QuestonWithDateModel from './questionTypes/QuestonWithDateModel'
import SimpleQuestionNumberModel from './questionTypes/SimpleQuestionNumberModel'
import UnSeulChoixModel from './questionTypes/UnSeulChoixModel'
import ChoixMultipleModel from './questionTypes/ChoixMultipleModel'
import ReponseLongueModel from './questionTypes/ReponseLongueModel'
import { Button } from 'react-native-paper'
import { globalStyles } from '../../globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuestionType } from '../store/slices/questionsListSlice'
import { RootState } from '../store/store'

export type ChooseQuestionTypeProps = {
  setAddQuestionMode: Dispatch<SetStateAction<boolean>>
  setInputQuestionMode: Dispatch<SetStateAction<boolean>>
}

const ChooseQuestionType: FC<ChooseQuestionTypeProps> = ({setInputQuestionMode, setAddQuestionMode}: ChooseQuestionTypeProps) => {

  const {selectedTypeOfQuestion} = useSelector((state: RootState)=> state.questionsList)

  const dispatch = useDispatch()

  const questionTypes = [
    {id:1, nom:'SimpleQuestionModel', title:"Réponse en lettre"}, 
    {id:2, nom:'SimpleQuestionNumberModel', title:"Réponse en chiffre"}, 
    {id:3, nom: 'QuestonWithDateModel', title:"Réponse en date"},
    {id:4, nom: 'UnSeulChoixModel', title:"Choix unique de réponse"},
    {id:5, nom: 'ChoixMultipleModel', title:"Choix multiples"},
  ]

  const displayQuestionTypesModels = (modelName: string): (ReactElement|null) =>{
    switch (modelName) {
      case "SimpleQuestionModel" :
        return <SimpleQuestionModel/>
      case "ReponseLongueModel" :
        return <ReponseLongueModel/>
      case 'SimpleQuestionNumberModel':
        return <SimpleQuestionNumberModel/>
      case 'QuestonWithDateModel':
        return <QuestonWithDateModel/>
      case 'UnSeulChoixModel':
        return <UnSeulChoixModel/>
      case 'ChoixMultipleModel':
        return <ChoixMultipleModel/>
      default :
        return null
    }
  }

  const cancelHandle = ()=>{
    setAddQuestionMode(false)
    dispatch(selectQuestionType(undefined))
  }

  return (
    <View style={{marginVertical:15}}>
      
      <Text style={{fontSize:20, marginBottom:15}}>Sélectionnez un type de question :</Text>
      <FlatList
        horizontal={true}
        data={questionTypes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> (
          <View style={{marginHorizontal:10}}>
            <Text style={{textAlign:"left", color:'black', marginBottom:7.5}}>&#183; {item.title}</Text>
            <TouchableOpacity 
              key={item.id} 
              style={{
                borderWidth: 2, 
                borderColor:`${selectedTypeOfQuestion===item.id ? "whitesmoke": "grey"}`, 
                paddingVertical:15, paddingHorizontal:25, 
                borderRadius:10, 
                backgroundColor:`${selectedTypeOfQuestion===item.id ? "#d4d6d8": "white"}`
              }} 
              onPress={()=> dispatch(selectQuestionType(item.id))}
            >
              {displayQuestionTypesModels(item.nom)}
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={[globalStyles.flexRow, {justifyContent:"center", marginTop:15}]}>
        <Button mode="contained" color="red" style={{marginHorizontal:5}} onPress={()=> cancelHandle()}>
          Annuler 
        </Button>
        <Button mode="contained" disabled={selectedTypeOfQuestion===null} color="green" style={{marginHorizontal:5}} onPress={()=> setInputQuestionMode(true)} >
          Valider 
        </Button>
      </View>
    </View>
  )
}

export default ChooseQuestionType

const styles = StyleSheet.create({})