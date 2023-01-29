import { createSlice } from "@reduxjs/toolkit";
import { Questionnaire } from "../../models/questionnaire";

export interface QuestionnairesList {
  questionnairesList: Questionnaire[]
  currentQuestionnaire: Questionnaire
}

const initialState: QuestionnairesList = {
  questionnairesList: [],
  currentQuestionnaire: new Questionnaire("", [], "")
}

const questionnairesListSlice = createSlice({
  name: 'questionnairesList',
  initialState,
  reducers: {
    handleQuestionnairesList: (state, action)=> {
      state.questionnairesList = action.payload
    },
    getCurrentQuestionnaire : (state, action) => {
      state.currentQuestionnaire = action.payload
    }
  }
})

export const {handleQuestionnairesList, getCurrentQuestionnaire} = questionnairesListSlice.actions

export default questionnairesListSlice.reducer