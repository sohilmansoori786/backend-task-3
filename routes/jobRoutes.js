import express from 'express'
import userAuth from './../middlewares/authMiddleware.js';
import { createJobControllers } from '../controllers/jobControllers.js';

const router =express.Router()

//routes
//CREATE JOB ||POST
router.post('/create-job', userAuth,createJobControllers)


export default router