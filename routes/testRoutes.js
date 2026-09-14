import express from 'express'
import { testPostController } from '../controllers/testControllers.js'

//router object
const router =express.Router()

//routes
router.post("/test-post",testPostController);

//export
export default router;
