import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/customError.js'
import User from '../models/User.js'
import { uploadImage } from '../utils/imageUtils.js'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { createJWT } from '../utils/tokenUtils.js'

export const register = async (req, res) => {
    const image = await uploadImage(req,'tma_users',true)
    const password = await hashPassword(req.body.password)
    req.body.password = password
    const user = await User.create({...req.body,image})
    if(!user || !image || !password) throw new BadRequestError('There was an error in registering')
    res.status(StatusCodes.OK).json({user})
}

export const login = async (req, res) => {
    const user = await User.findOne({username: req.body.username})
    if(!user) throw new BadRequestError('The username provided do not exist in the database')
    const validUser = await comparePassword(req.body.password, user.password)
    if(!validUser) throw UnauthenticatedError('Wrong password!')

    const token = createJWT({id:user._id})
    const oneDay = 1000 * 60 * 60 * 24
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now() + oneDay),
        secure:process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json('Logged in successfully!')
}

export const logout = async (req, res) => {
    res.cookie('token', 'logout' ,{
        httpOnly:true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json('Logged out!')
}

export const fetchCurrentUser = async (req, res) => {
    const user = await User.findById(req.user.id)
    res.status(StatusCodes.OK).json({user})
} 