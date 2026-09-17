import mongoose from 'mongoose';
 
const jobSchema =new mongoose.Schema({             //schema
 company:{
     type:String,
     required:[true,'company name is required'],
    },
 position:{
    type:String,
    required:[true,"Job position is required"],
    minlength:100
 },
 status:{
     type:String,
     enum:['pending','reject','interview'],
     default:'pending'
 },
 workType:{
      type:String,
      enum:['full-time','part-time','contract based','internship'],
      default:'full-time'
 },
 workLocation:{
    type:String,
    default:'Mumbai',
    required:[true,'work location is required']
 },
 createdBy:{
    type:mongoose.Types.ObjectId,
    ref :'user'
 }
},{timestamps:true} )

export default mongoose.model('Job',jobSchema)         //export