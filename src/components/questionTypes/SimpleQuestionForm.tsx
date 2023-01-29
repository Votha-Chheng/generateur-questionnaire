import { StyleSheet, View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import { IconButton, TextInput } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

export type SimpleQuestionProps = {
  textQuestion: string
  reponseObligatoire: boolean
  placeHolder?: string
}

const SimpleQuestionForm : FC<SimpleQuestionProps> = ({reponseObligatoire, textQuestion, placeHolder}: SimpleQuestionProps) => {
  const [question, setQuestion] = useState<string>("")
  const [changeQuestion, setChangeQuestion] = useState<boolean>(false)

  const handleChangeText = (text: string)=>{
    setQuestion(text)
  }


  return (
    <View>
      {
        changeQuestion
        ?
        <TextInput value={question} onChangeText={(text)=> handleChangeText(text)}/>
        :
        <View style={globalStyles.flexRow}>
          {
            question.length>1
            ?
            <Text style={globalStyles.labelModel}>{question} :</Text>
            :
            <Text style={globalStyles.labelModel}>Ecrire question : </Text>
          }
          <IconButton 
            icon="pencil-box"
            color='orange'
            size={35}
            onPress={()=> setChangeQuestion(true)}
            style={{justifyContent:"center", height:35}}
          />
        </View>
        
      }
      
      <TextInput dense={true} mode='outlined' activeOutlineColor='green' placeholder='Réponse ouverte' />
    </View>
  )
}

export default SimpleQuestionForm

const styles = StyleSheet.create({})