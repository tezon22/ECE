import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import {getImage}  from './imageService'

export const getImages = createAsyncThunk("pdf/getImages", async(data, thunkAPI) =>{
    try {
        return  getImage(data)
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
    image: null,
    message: ''
}
export const imageSlice=createSlice({
    name: 'pdf',
    initialState, 
    extraReducers:{
        [getImages.pending] : (state) =>{
            state.loading = true
        },
        [getImages.fulfilled] : (state,action) =>{
            state.loading = false
            state.changed = true
            state.pic = action.payload
        },
        [getImages.rejected] : (state,action) =>{
            state.loading = false
            state.changed =false
            state.failed = true
            state.message = action.payload
        }
    }
})

export default imageSlice.reducer