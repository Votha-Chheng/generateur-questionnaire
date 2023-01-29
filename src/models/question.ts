import Realm from "realm"

export class Question {
  _id: number;
  type: number;
  question: string;
  typeOfAnswer: "Numérique"|"Code postal"|"Texte court"|"Long texte"|"Téléphone"|"E-mail"|"Date"|"Adresse"|"Choix multiple";
  reponseObligatoire: boolean;
  choiceList?: string[];
  singleExtraAnswer?: string;
  multipleExtraAnswers?: string[];

  constructor(  
    _id: number,
    type: number,
    question: string,
    typeOfAnswer:"Numérique"|"Code postal"|"Texte court"|"Long texte"|"Téléphone"|"E-mail"|"Date"|"Adresse"|"Choix multiple",
    reponseObligatoire : boolean = false,
    choiceList?: string[],
    singleExtraAnswer?: string,
    multipleExtraAnswers?: string[],

  ) {
    this._id = _id;
    this.type = type;
    this.question = question;
    this.typeOfAnswer = typeOfAnswer;
    this.reponseObligatoire = reponseObligatoire;
    this.choiceList = choiceList;
    this.singleExtraAnswer = singleExtraAnswer;
    this.multipleExtraAnswers = multipleExtraAnswers;
  }
}


// export const QuestionSchema : Realm.ObjectSchema = {
//   name: "Question",
//   primaryKey: "_id",
//   properties: {
//     _id: "int",
//     type: "string",
//     reponseObligatoire : {type:"bool", default: false}
//   },
// }

export class QuestionsList {
  _id: number;
  questionsList: Question[];
  sectionId? : string

  constructor(  
    _id: number,
    questionsList: [],
    sectionId : undefined

  ) {
    this._id = _id;
    this.questionsList = questionsList
    this.sectionId = sectionId
  }
}



