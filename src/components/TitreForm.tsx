import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { IconButton, TextInput } from 'react-native-paper'
import { globalStyles } from '../../globalStyles'
import { checkInput } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { getCurrentQuestionnaire } from '../store/slices/questionnairesListSlice'

const TitreForm: FC = () => {
  const {currentQuestionnaire} = useSelector((state: RootState)=> state.questionnairesList)
  const {nom} = currentQuestionnaire

  const [modify, setModify] = useState<boolean>(false)

  const dispatch = useDispatch()

  return (
    <View style={globalStyles.marginVertical}>
      {
        modify 
        ?
        <View>
          <TextInput 
            placeholder='TITRE DU QUESTIONNAIRE' 
            style={{fontSize:25, textAlign:"center"}} 
            multiline={true} 
            autoCapitalize="characters" 
            onChangeText={(text)=> dispatch(getCurrentQuestionnaire({...currentQuestionnaire, nom: text}))} 
            value={nom ?? ""} 
            right={<TextInput.Icon icon="checkbox-outline" size={35} color="green" onPress={()=> setModify(false)} />} 
          />
        </View>  
        :
        <View style={[globalStyles.blur]}>
          <Text style={[globalStyles.mainTitle, {color: `${nom && nom.length>0 ? "black":"grey"}` }]}>
            {nom && nom.length>0 ? nom : "NOM DU QUESTIONNAIRE"}
          </Text>
          <Text style={globalStyles.mainTitle}>
            {nom && nom.length<1 ? '(ex: "QUESTIONNAIRE DE PREMIER RENDEZ-VOUS")': null}
          </Text>
          <IconButton 
            style={[globalStyles.iconPosition, {top:-5}]}
            icon="pencil-box-outline"
            color='orange'
            size={40}
            onPress={()=> modify ? setModify(false) : setModify(true)}
          />
        </View>
      }
    </View>
  )
}

export default TitreForm

const styles = StyleSheet.create({
  
})