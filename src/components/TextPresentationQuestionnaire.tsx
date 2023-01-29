import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Button, Switch, TextInput } from 'react-native-paper'
import { globalStyles } from '../../globalStyles'
import { checkInput } from '../utils'

const TextPresentationQuestionnaire: FC = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const [modify, setModify] = useState<boolean>(true)
  const [textIntro, setTextIntro] = useState<string>("")

  const handleSwitchChange = ()=>{
    setDisplay(prev=> !prev)
    setModify(true)
  }

  return (
    <View style={{marginBottom:20}}>
      <View style={[globalStyles.flexRow, {alignItems: 'center'}]}>
        <Text style={{marginRight:10, fontSize:20, color:`${display ? "black":"#bfc2c5"}`}}>Ecrire une introduction au questionnaire</Text>
        <Switch value={display} onValueChange={()=>handleSwitchChange()} color="green" />
      </View>
      {
        display && modify
        ?
        <View>
          <TextInput
            mode='outlined'
            activeOutlineColor={checkInput(textIntro) ? 'green': "#bfc2c5"}
            placeholder='Expliquez quel est le but du questionnaire que vous allez créer, en quoi il est utile et ce que vous ferez des informations données par celui qui le remplira...'
            placeholderTextColor="#bfc2c5"
            value={textIntro}
            multiline={true}
            autoCapitalize="sentences"
            style={{fontSize:20}}
            onChangeText={(text)=> setTextIntro(text)}
          />
          <View style={{alignItems:'center'}}>
            <Button disabled={!checkInput(textIntro)} mode="contained" onPress={()=> setModify(false)} style={styles.btnStyle} color="green" >
              Valider
            </Button>
          </View>

        </View>
        :
        display && !modify
        ?
        <View>
          {
            <View style={globalStyles.blur}>
              {
                textIntro === "" 
                ?
                <Text style={{color:"red", fontSize:30}}>Vous n'avez rien écrit aucune présentation !</Text>
                :
                <Text style={globalStyles.text}>
                  {'\t'}{textIntro}
                </Text>
              }
            </View>
          }
          
          <View style={{alignItems:'center'}}>
            <Button onPress={()=> setModify(true)} mode="contained" style={styles.btnStyle} color="#bfc2c5" >
              Modifier
            </Button>
          </View>
        </View>
        :
        null
      }
    </View>
  )
}

export default TextPresentationQuestionnaire

const styles = StyleSheet.create({
  btnStyle: {
    width:150
  }
})