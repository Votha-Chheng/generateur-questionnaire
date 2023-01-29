import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../models/question";

export interface QuestionsList {
  questionsList: Question[],
  question: string
  selectedTypeOfQuestion?: number 
}

const initialState: QuestionsList = {
  questionsList: [],  
  question: "",
  selectedTypeOfQuestion: undefined
}

const questionsListSlice = createSlice({
  name: 'questionsList',
  initialState,
  reducers: {
    getQuestionsList : (state, action) => {
      state.questionsList = action.payload
    },
    getQuestion : (state, action) => {
      state.question = action.payload
    },
    selectQuestionType: (state, action)=> {
      state.selectedTypeOfQuestion = action.payload
    }
  }
})

export const {getQuestion, getQuestionsList, selectQuestionType} = questionsListSlice.actions

export default questionsListSlice.reducer