import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  mainTitle: {
    fontSize:25,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center"
  },
  marginVertical : {
    marginVertical: 15
  },
  blur: {
    borderWidth:5,
    borderColor: "#bfc2c5",
    borderRadius:10,
    paddingVertical:15,
    paddingHorizontal: 10
  },
  labelModel: {
    color:"black", 
    fontSize: 15,
    marginBottom:10
  },
  text:{
    color:"black",
    fontSize:20,
    fontFamily:"FrankRuhlLibre_900Black"
  },
  container : {
    paddingHorizontal:10,
    paddingTop: 10
  },
  iconPosition: {
    position: 'absolute',
    right:0,
    top:0,
  },
  label : {
    fontSize : 20,
    fontWeight:"bold",
    marginBottom:10,
    paddingRight:10,
    letterSpacing:0.75
  },
  flexRow : {
    flexDirection:"row", 
    alignItems: "center"
  },
  input : {
    height:40,
    fontSize:20, 
    paddingHorizontal:5, 
    marginLeft:7.5, 
    borderWidth:1
  },
  texte: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    letterSpacing : 1.25,
    fontSize:17,
    textAlign:"justify",
    lineHeight : 25
  },
  texteMiddle: {
    paddingBottom: 10,
    paddingTop:0,
    paddingHorizontal: 25,
    letterSpacing : 1.25,
    fontSize:17,
    textAlign:"justify",
    lineHeight : 25
  },
  marginBottomSpace:{
    marginBottom:20
  }
})