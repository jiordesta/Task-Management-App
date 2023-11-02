import { StatusCodes } from 'http-status-codes'
import Project from '../models/Project.js'
import { uploadImage } from '../utils/imageUtils.js'
import { BadRequestError } from '../errors/customError.js'

export const createProject = async (req, res) => {
    const image = await uploadImage(req.file, 'tma_projects',true)
    const project = await Project.create({...req.body,image})
    if(!project) throw new BadRequestError('There was an error creating the project!')
    res.status(StatusCodes.OK).json({project})
}