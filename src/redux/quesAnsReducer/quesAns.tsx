import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store';

// Define a type for the slice state
interface DataState {
  ans: string[],
}

// Define the initial state using that type
const initialState: DataState = {
  ans: [],
}

export const dataSlice = createSlice({
  name: 'quesAnsData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    saveData: (state, action: PayloadAction<string>) => {
      state.ans = [...state.ans, action.payload]
    },
    clearData: (state, action: PayloadAction<string>) => {   
      state.ans = []
    }
  }
  
})

export const { saveData, clearData } = dataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.quesAns.ans

export default dataSlice.reducer