import Realm from "realm"
import { Section } from "./section";

export class Questionnaire {
  _id: string;
  sectionsList: Section[]
  nom: string;

  constructor(  
    _id: string,
    sectionsList: Section[],
    nom: string,

  ) {
    this._id = _id;
    this.sectionsList = sectionsList;
    this.nom = nom;
  }
}


const QuestionnaireSchema : Realm.ObjectSchema = {
  name: "Questionnaire",
  primaryKey: "_id",
  properties: {
    _id: "string",
    nom: "string",
    sectionList : "Section[]"
  },
}


export default QuestionnaireSchema