
export const changeInputColor = (reponseObligatoire: boolean, reponse: any|undefined) : string =>{

  if(reponseObligatoire === true){
    if(reponse === undefined || reponse === null || reponse.length<1){
      return "red"
    }
  }

  return "green"
}

export const checkInput = (input: string, length = 1): boolean=>{
  return input.length<length ? false : true
} 