import {Router} from 'express'
import { fetchAllUsers } from '../controllers/userController.js'

const router = Router()

router.route('/fetch_all').get(fetchAllUsers)

export default router