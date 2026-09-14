import express from'express'
import { registerControllers } from '../controllers/authControllers.js'

//router objects
const router =express.Router()  //router-->object hai.

//routes
router.post('/register',registerControllers)




//export
export default router