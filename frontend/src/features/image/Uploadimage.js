import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import { uploadImage }  from './imageService'

export const uploadImages = createAsyncThunk("image/uploadImages", async(data, thunkAPI) =>{
    try {
        return  uploadImage(data)
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
export const imageSlice=createSlice({
    name: 'uploadImage',
    initialState, 
    extraReducers:{
        [uploadImages.pending] : (state) =>{
            state.loading = true
        },
        [uploadImages.fulfilled] : (state,action) =>{
            state.loading = false
            state.changed = true
            state.message = action.payload
        },
        [uploadImages.rejected] : (state,action) =>{
            state.loading = false
            state.changed =false
            state.failed = true
            state.message = action.payload
        }
    }
})

export default imageSlice.reducer