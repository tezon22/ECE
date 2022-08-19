import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { emailService } from './emailService'


export const getEmail = createAsyncThunk('email/getEmail', async (data, thunkAPI) => {
    try {
        return await emailService(data)
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

const initialState ={
    email: [],
    gettingE: false,
    gottenE: false,
    lostE:false,
    message: ''   
}

const emailSlice = createSlice({
    name: 'email',
    initialState,
    extraReducers: {
        [getEmail.pending]: (state) =>{
            state.gettingE = true
            state.lostE = false
        },
        [getEmail.fulfilled]: (state,action) =>{
            state.gettingE = false
            state.gottenE = true
            state.lostE = false
            state.email = action.payload
        } ,
        [getEmail.rejected]: (state, action) =>{
            state.gettingE = false
            state.lostE = true
            state.message = action.payload
        }
    }
})

export default emailSlice.reducer