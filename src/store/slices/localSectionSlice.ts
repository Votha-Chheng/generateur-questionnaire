import { createSlice } from "@reduxjs/toolkit";
import { Questionnaire } from "../../models/questionnaire";
import { Section } from "../../models/section";

export interface LocalSection {
  
}

const initialState: LocalSection = {
  questionnairesList: [],
  currentQuestionnaire: new Questionnaire("", [], "")
}

const questionnairesListSlice = createSlice({
  name: 'questionnairesList',
  initialState,
  reducers: {
    // handleQuestionnairesList: (state, action)=> {
    //   state.questionnairesList = action.payload
    // },
    // getCurrentQuestionnaire : (state, action) => {
    //   state.currentQuestionnaire = action.payload
    // }
  }
})

export const {} = questionnairesListSlice.actions

export default questionnairesListSlice.reducer