import usermodel from "../models/usermodel.js";

export const registerControllers= async(req,res)=>{        //function
    try{
        const {name,email,password}=req.body
        //validate
        if(!name){
            //return res.send({success:false,message:'please provide name'});
            next("name is required")
        }
        if(!email){
            //return res.send({success:false,message:'please provide email'});
            next("email is required")
        }
        if(!password){
            //return res.send({success:false,message:'please provide password'});
            next("password is required and greater than 6 character")
        }
        const exisitingUser=await usermodel.findOne({email})      //variable
        if(exisitingUser){
           next("Email Already register please login")
        }
        const user =await usermodel.create({name,password,email})    //variable
        res.send({
            success:true,
            message:'User Created Successfully',
            user,
        });

        
    }
    catch ( error ){
       next(error);         //directly use it by using middleware 
                            //execution of next function
    }
};
  

    