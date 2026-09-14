import usermodel from "../models/usermodel.js";

export const registerControllers= async(req,res)=>{        //function
    try{
        const {name,email,password}=req.body
        //validate
        if(!name){
            return res.send({success:false,message:'please provide name'});
        }
        if(!email){
            return res.send({success:false,message:'please provide name'});
        }
        if(!password){
            return res.send({success:false,message:'please provide name'});
        }
        const exisitingUser=await usermodel.findOne({email})      //variable
        if(exisitingUser){
            return res.send({
                  success:false,
                  message:'Email Already Register Please login'
            })
        }
        const user =await userModel.create({name,password,email})    //variable
        res.send({
            success:true,
            message:'User Created Successfully',
            user,
        });

        
    }
    catch ( error ){
        console.log(error)
        res.send({
         message:'Error In Register Controller',
         success:false,
         error
        })
    }
};
  

    