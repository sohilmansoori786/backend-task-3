import jobmodel from "../models/jobmodel.js"

           //CREATE JOB
export const createJobControllers= async(req ,res ,next)=>{
  const {company,position}=req.body
  if(!company || !position){
      next('Please provide all fields')
  }
   req.body.createdBy =req.user.userId
   const job =await jobmodel.create(req.body);
   res.status(201).send({ job });
};
        //GET JOB
   export const getAllJobControllers =async (req,res,next)=>{
    const job =await jobmodel.find({createdBy:req.user.userId})
    res.status(200).send({
        totalJob : job.length,
        job
    })
};
          