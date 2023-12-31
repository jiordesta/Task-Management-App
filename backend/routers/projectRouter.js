import {Router} from 'express'
import { createProject, fetchAllProjects, fetchProject } from '../controllers/projectController.js'
import { validateCreateProjectInput } from '../middlewares/validationMiddleware.js'
import { upload } from '../middlewares/multerMiddleware.js'
import { addUser } from '../middlewares/authMiddleware.js'

const router = Router()

router.route('/create').post(upload.single('image'),addUser,validateCreateProjectInput,createProject)
router.route('/fetch_all').get(fetchAllProjects)
router.route('/fetch/:id').get(fetchProject)

export default router