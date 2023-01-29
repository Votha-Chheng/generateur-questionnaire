import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { globalStyles } from '../../globalStyles'
import { Button, IconButton, Switch, TextInput } from 'react-native-paper'
import ChooseQuestionType from './ChooseQuestionType'
import QuestionFormComponent from './QuestionFormComponent'
import QuestionsList from './QuestionsList'
import { checkInput } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getCurrentQuestionnaire } from '../store/slices/questionnairesListSlice'

export type SectionComponentProps = {
  id: string
}

const SectionComponent: FC<SectionComponentProps> = ({id}: SectionComponentProps) => {
  const {questionsList} = useSelector((state: RootState)=> state.questionsList)
  const {currentQuestionnaire} = useSelector((state: RootState)=> state.questionnairesList)
  const currentSectionsList= currentQuestionnaire.sectionsList

  const [addQuestionMode, setAddQuestionMode] = useState<boolean>(false)
  const [titleSection, setTitleSection] = useState<string>("")
  const [changeTitleSection, setChangeTitleSection] = useState<boolean>(false)
  const [displayTitreSection, setDisplayTitreSection] = useState<boolean>(false)
  const [inputQuestionMode, setInputQuestionMode] = useState<boolean>(false)

  const dispatch = useDispatch()
  
  const handleSwitchChange = ()=>{
    setTitleSection("")
    setDisplayTitreSection(prev=> !prev)
  }

  const deleteSection = (id: string)=>{
    const newSectionList = currentSectionsList.filter(sect => sect._id !== id)
    dispatch(getCurrentQuestionnaire({...currentQuestionnaire, sectionsList: newSectionList}))
  }

  return (
    <View style={[globalStyles.marginVertical, {paddingTop:0}]}>
      <View style={[globalStyles.blur, {paddingTop:0}]}>
        <IconButton 
          style={{alignSelf:"center", marginTop:0, marginBottom:25, borderRadius:7.5}}
          icon="minus-box-outline"
          color='red'
          size={30}
          onPress={() => deleteSection(id)}
        />
        <View>
          {
            changeTitleSection 
            ?
            <TextInput
              placeholder='Titre de la section'
              style={{fontSize:25}}
              right={<TextInput.Icon icon={checkInput(titleSection)? "checkbox-outline" : "minus-box-outline" } size={35} color={`${checkInput(titleSection) ? "green" : "red"}`} onPress={()=> setChangeTitleSection(false)}/>}
              onSubmitEditing={()=>setChangeTitleSection(false)}
              onChangeText={(text)=> setTitleSection(text)}
              value={titleSection}
              underlineColor={`${checkInput(titleSection) ? "green" : "red"}`}
              activeUnderlineColor={`${checkInput(titleSection) ? "green" : "red"}`}
              autoCapitalize="sentences"
            />
            :
            <View style={[globalStyles.flexRow, {alignItems:"center"}]}>
              <Switch value={displayTitreSection} onValueChange={()=>handleSwitchChange()} color="green" style={{marginRight:15}} />
              {
                !displayTitreSection 
                ?
                <Text style={[styles.titreSection, {marginHorizontal:10, color:`${checkInput(titleSection) ? "black": "grey"}`}]}>Ecrire un titre de section</Text>
                :
                titleSection.length>0
                ?
                <Text style={styles.titreSection}>{titleSection}</Text>
                :
                <Text style={[styles.titreSection, {marginHorizontal:10, color:`${checkInput(titleSection) ? "black": "grey"}`}]}>
                  {displayTitreSection ? "Titre de la section": "Ecrire un titre de section"}
                </Text>
              }
              
              {
                displayTitreSection
                ?
                <IconButton
                  icon="pencil-box-outline"
                  color='orange'
                  size={35}
                  onPress={()=> setChangeTitleSection(true)}
                  style={{justifyContent:"center", height:35}}
                />
                :
                null
              } 
            </View>
          }
        </View>
        {
          questionsList.length>0
          ?
          <QuestionsList/>
          :
          null
        }
        <View style={{height:3, width:"100%", backgroundColor:"#d4d6d8", marginVertical:10}} />
        {
          inputQuestionMode
          ?
          <QuestionFormComponent setAddQuestionMode={setAddQuestionMode} setInputQuestionMode={setInputQuestionMode} />
          :
          addQuestionMode
          ?
          <ChooseQuestionType setAddQuestionMode={setAddQuestionMode} setInputQuestionMode={setInputQuestionMode} />
          :
          <Button mode='contained' color='green' style={{marginVertical:10}} onPress={()=> setAddQuestionMode(true)}>
            + Ajouter une question
          </Button>
        }
      </View>  
    </View>
  )
}

export default SectionComponent

const styles = StyleSheet.create({
  titreSection: {
    textDecorationLine:"underline", 
    fontSize:25,
    fontWeight: 'bold',
    color:"black"
  }
})