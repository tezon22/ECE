import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import {resetService} from './reset.js'

export const resetpassword = createAsyncThunk("reset/resetpassword", async(data, thunkAPI) =>{
    try {
        return  resetService(data)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})

const initialState = {
    loading:false,
    changed: false,
    failed: false,
    message: ''
}
export const resetSlice=createSlice({
    name: 'reset',
    initialState, 
    extraReducers:{
        [resetpassword.pending] : (state) =>{
            state.loading = true
        },
        [resetpassword.fulfilled] : (state,action) =>{
            state.loading = false
            state.changed = true
            state.message = action.payload
        },
        [resetpassword.rejected] : (state,action) =>{
            state.loading = false
            state.changed =false
            state.failed = true
            state.message = action.payload
        }
    }
})

export default resetSlice.reducer