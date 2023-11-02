import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loadingUsers: false
}
const path = '/tma/user/'

export const fetchUsers = createAsyncThunk('/fetch_all_users', async () => {
    try {
        const response = await axios.get(`${path}fetch_all`)
        return response.data
    } catch (error) {
        if(error.response.request.status === 500) throw new Error('SERVER IS OFFLINE!')
        throw new Error(error.response.data.message)
    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loadingUsers = true
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loadingUsers = false
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loadingUsers = false
            state.users = action.payload.users
        })
    }
})

export default userSlice.reducer