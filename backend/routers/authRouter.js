import {Router} from 'express'
import { fetchCurrentUser, login, logout, register } from '../controllers/authController.js'
import { upload } from '../middlewares/multerMiddleware.js'
import { validateLoginInput, validateRegisterInput } from '../middlewares/validationMiddleware.js'
import { authenticateUser } from '../middlewares/authMiddleware.js'

const router = Router()
router.route('/register').post(upload.single('image'),validateRegisterInput,register)
router.route('/login').post(validateLoginInput,login)
router.route('/logout').patch(authenticateUser,logout)
router.route('/fetch').get(authenticateUser,fetchCurrentUser)

export default router