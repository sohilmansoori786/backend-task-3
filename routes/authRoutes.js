import express from'express'
import { registerControllers, loginController} from '../controllers/authControllers.js'

//router objects
const router =express.Router()  //router-->object hai.

//routes

//REGISTER POST
router.post('/register',registerControllers)

//LOGIN POST
router.post('/login',loginController)



//export
export default router