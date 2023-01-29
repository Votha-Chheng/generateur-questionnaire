import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import questionsListReducer from './slices/questionsListSlice'
import questionnairesListReducer from './slices/questionnairesListSlice'

const store = configureStore({
  reducer: {
    questionsList : questionsListReducer,
    questionnairesList : questionnairesListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatch>()

export default store