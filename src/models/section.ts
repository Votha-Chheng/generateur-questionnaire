import Realm from "realm"

export class Section {
  _id: string;
  questionsList: any[];
  titre?: string;
  texte?: string;

  constructor(  
    _id: string,
    questionsList: any[],
    titre?: string,
    texte?: string,

  ) {
    this._id = _id;
    this.titre = titre;
    this.questionsList = questionsList
    this.texte = texte;
  }
}

export class SectionsList {
  _id: string;
  sectionsList: Section[];
  questionnaireId?: string;

  constructor(  
    _id: string,
    sectionsList: [],
    questionnaireId: undefined

  ) {
    this._id = _id;
    this.sectionsList = sectionsList;
    this.questionnaireId = questionnaireId
  }
}


const SectionSchema : Realm.ObjectSchema = {
  name: "Section",
  primaryKey: "_id",
  properties: {
    _id: "int",
    titre : "string",
    texte: "string?",
    questionsListe: "Questions[]"
  },
}


export default SectionSchema