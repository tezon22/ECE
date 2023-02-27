import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import getPdfs  from './PdfService'

export const getPdf = createAsyncThunk("pdf/getPdf", async(data, thunkAPI) =>{
    try {
        return  getPdfs(data)
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
export const pdfSlice=createSlice({
    name: 'pdf',
    initialState, 
    extraReducers:{
        [getPdf.pending] : (state) =>{
            state.loading = true
        },
        [getPdf.fulfilled] : (state,action) =>{
            state.loading = false
            state.changed = true
            state.message = action.payload
        },
        [getPdf.rejected] : (state,action) =>{
            state.loading = false
            state.changed =false
            state.failed = true
            state.message = action.payload
        }
    }
})

export default pdfSlice.reducer