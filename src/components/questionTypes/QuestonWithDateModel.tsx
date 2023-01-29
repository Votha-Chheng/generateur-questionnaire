import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Button } from 'react-native-paper'
import { globalStyles } from '../../../globalStyles'

const QuestonWithDateModel: FC = () => {
  return (
    <View>
      <Text style={globalStyles.labelModel}>
        Question impliquant une date comme réponse :
      </Text>
      <View style={[globalStyles.flexRow, {alignItems:'center', marginBottom:0}]}>
        <Button color='blue' mode='contained' >
          Changer la date
        </Button>
        <Text style={{marginLeft:10}}>Lundi 12 décembre 2021</Text>
      </View>
    </View>
  )
}

export default QuestonWithDateModel

const styles = StyleSheet.create({})