import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    createDrawer : false,
    projects: [],
    loadingProjects: false,
    loadingCreate:false
}

const path = '/tma/project/'

export const createProject = createAsyncThunk('/create_project', async ({title, description, image, start, end, members}) => {
    console.log({title, description, image, start, end, members})
    const formData = new FormData()
    formData.append('title',title)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('start', start)
    formData.append('end', end)
    formData.append('members',members.map((member) => member._id))
    try {
        const response = await axios.post(`${path}create`,formData)
        return response.data
    } catch (error) {
        if(error.response.request.status === 500) throw new Error('SERVER IS OFFLINE!')
        throw new Error(error.response.data.message)   
    }
})

export const fetchProjects = createAsyncThunk('/fetch_all_projects', async () => {
    try {
        const response = await axios.get(`${path}fetch_all`)
        return response.data
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
            state.projects = [...state.projects, action.payload.project]
        })

        builder.addCase(fetchProjects.pending, (state, action) => {
            state.loadingProjects = true
        })
        builder.addCase(fetchProjects.rejected, (state, action) => {
            state.loadingProjects = false
        })
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.loadingProjects = false
            state.projects = action.payload.projects
        })
    }
})

export default projectSlice.reducer
export const {setCreateDrawer} = projectSlice.actions