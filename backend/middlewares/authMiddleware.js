import { UnauthenticatedError } from "../errors/customError.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies
    if(!token) throw new UnauthenticatedError('authentication invalid')
    try{
        const {id} = verifyJWT(token)
        req.user = {id}
        next()
    }catch(err){
        if(!token) throw new UnauthenticatedError('authentication invalid')
    }
}