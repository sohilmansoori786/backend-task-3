import usermodel from "../models/usermodel.js";
                //user register
export const registerControllers= async(req,res,next)=>{        //function
    try{
        const {name,email,password}=req.body
        //validate
        if(!name){
            //return res.send({success:false,message:'please provide name'});
            return next("name is required")     //call
        }
        if(!email){
            //return res.send({success:false,message:'please provide email'});
            return next("email is required")
        }
        if(!password){
            //return res.send({success:false,message:'please provide password'});
            return next("password is required and greater than 6 character")
        }
        const exisitingUser=await usermodel.findOne({email});      //variable
        if(exisitingUser){
          return next("Email Already register please login")
        }
        const user =await usermodel.create({name,password,email})    //variable
         
         //token    //token used to verify identity of user.
     const token =user.createJWT()
        res.send({
            success:true,
            message:'User Created Successfully',
            user,
            token
        });

        
    }
    catch ( error ){
       return next(error);         //directly use it by using middleware 
                            //execution of next function
    }
};
                //Login API
export const loginController=async(req,res,next)=>{              //function
     const {email,password}=req.body
     //validation
     if(!email||!password){
        return next('please provide all fields')
     }
     //find user by email
     const user=await usermodel.findOne({email})
     if(!user){
        next('user not found')
        return res.status(404)
        
     }
     //Compare Password
     const isMatch=await user.comparePasswords(password)
     if(!isMatch){
        return next('Invalid Username or password ')
     }
     const token=user.createJWT();
     res.send({
        success:true,
        message:"Login Successfully",
        user,
        token, 
     })
};
    
  
 