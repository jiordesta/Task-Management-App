import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    createDrawer : false,
    projects: [],
    loadingProjects: false,
    loadingCreate:false
}

export const createProject = createAsyncThunk('/create_project', async (project) => {
    try {
        return project
    } catch (error) {
        if(error.response.request.status === 500) throw new Error('SERVER IS OFFLINE!')
        throw new Error(error.response.data.message)   
    }
})

export const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers: {
        setCreateDrawer : (state, action) => {
            state.createDrawer = action.payload
        }
    },

    extraReducers:(builder) => {
        builder.addCase(createProject.pending, (state, action) => {
            state.loadingCreate = true
        })
        builder.addCase(createProject.rejected, (state, action) => {
            state.loadingCreate = false
        })
        builder.addCase(createProject.fulfilled, (state, action) => {
            state.loadingCreate = false
            state.projects = [...state.projects, action.payload]
        })
    }
})

export default projectSlice.reducer
export const {setCreateDrawer} = projectSlice.actions