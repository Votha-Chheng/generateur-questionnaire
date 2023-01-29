import { SafeAreaView, StyleSheet } from 'react-native'
import { FC } from 'react' 
import { Button } from 'react-native-paper'
import { useNavigation} from '@react-navigation/native'


export type Nav = {
  navigate: (value : string) => void
}

const HomeScreen: FC = () => {

  const {navigate} = useNavigation<Nav>()

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Button mode="contained" onPress={()=>navigate('AdminScreen')} color="blue" style={styles.navItem} >
        Créer un questionnaire
      </Button>
      <Button mode="contained" onPress={()=>navigate('ClientScreen')} style={styles.navItem}>
        Choisir un questionnaire
      </Button>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer :{
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10
  },
  navItem: {
    marginVertical: 10
  }
})