import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const path = '/tma/auth/'

const initialState = {
    showRegister : false,
    loadingRegister: false,
    loadingLogin : false,
    user : null
}

export const register = createAsyncThunk('/register', async (inputs) => {
    try {
        const formData = new FormData()
        formData.append('fname',inputs.fname)
        formData.append('lname',inputs.lname)
        formData.append('description',inputs.description)
        formData.append('username',inputs.username)
        formData.append('password',inputs.password)
        formData.append('image',inputs.image)

        const response = await axios.post(`${path}register`,formData)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const login = createAsyncThunk('/login', async (inputs) => {
    try {
        const response = await axios.post(`${path}login`,inputs)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.loadingRegister = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loadingRegister = false
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loadingRegister = false
        })

        builder.addCase(login.pending, (state, action) => {
            state.loadingLogin = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loadingLogin = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loadingLogin = false
        })
    }
})

export default authSlice.reducer