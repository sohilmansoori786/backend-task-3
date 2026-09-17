import jobmodel from "../models/jobmodel.js"

export const createJobControllers= async(req ,res ,next)=>{
  const {company,position}=req.body
  if(!company || !position){
      next('Please provide all fields')
  }
   req.body.createdBy =req.user.userId
   const job =await jobmodel.create(req.body);
   res.status(201).send({ job });
};