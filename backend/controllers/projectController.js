import { StatusCodes } from 'http-status-codes'
import Project from '../models/Project.js'
import { uploadImage } from '../utils/imageUtils.js'
import { BadRequestError } from '../errors/customError.js'

export const createProject = async (req, res) => {
    const {title, description, members, start, end} = req.body
    const image = await uploadImage(req,'tma_projects',true)
    const owner = req.user.id
    const objIds = []

    if(members !== ''){
        for(const id of members.split(',')){
            objIds.push(id)
        }
    }

    const project = await Project.create({title,description,owner,members:[...objIds, owner],start,end,image})
    if(!project || !image) throw new BadRequestError('There was an error creating the project!')
    res.status(StatusCodes.OK).json({project})
}
export const fetchAllProjects = async (req, res) => {
    const projects = await Project.find({})
    if(!projects) throw new BadRequestError('There was an error fetching the projects!')
    res.status(StatusCodes.OK).json({projects})
}