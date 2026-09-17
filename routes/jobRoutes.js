import express from 'express'
import userAuth from './../middlewares/authMiddleware.js';
import { createJobControllers, getAllJobControllers } from '../controllers/jobControllers.js';

const router =express.Router()

//routes
//CREATE JOB ||POST
router.post('/create-job', userAuth,createJobControllers)

//GET JOB || GET
router.get('/get-job',userAuth,getAllJobControllers)

export default router