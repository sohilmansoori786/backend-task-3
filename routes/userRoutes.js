import express from"express";
import userAuth from './../middlewares/authMiddleware.js';
import { getAlluserControllers, updateUserController } from "../controllers/userController.js";

//router object
const router =express.Router()

//routes
//GET USERS ||GET
router.get('/get-user',userAuth,getAlluserControllers)

//UPDATE USER ||PUT
router.put('/update-user',userAuth,updateUserController)

export default router;