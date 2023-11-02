import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/customError.js'
import User from '../models/User.js'

export const fetchAllUsers = async (req, res) => {
    const users = await User.find({})
    if(!users) throw new BadRequestError('There was an error fetching the data!')
    return res.status(StatusCodes.OK).json({users})
}