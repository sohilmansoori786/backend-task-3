import mongoose from"mongoose";
import validator from"validator";      //for any incorrect statement
import bcrypt from 'bcryptjs';      //password hasing
import JWT from "jsonwebtoken";

//schema
const userSchema=new mongoose.Schema({          //create new mongoose schema
    name:{                                       //schema-->object
        type:"String",
        required:[true,'Name is required'],
    },
    lastname:{
        type:"String",
    },
    email:{
        type:"String",
        required:[true,'email is required'],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:"String",
        required:[true,'password is important'],
        minlength:[6,'password length should be greater than 6 character']
    },
    location:{
         type:"String",
         default:"INDIA"
    },
},
   { timestamps:true } 
);
//Middlewares
userSchema.pre("save",async function(){          //hashing password before store
    const salt=await bcrypt.genSalt(10);       // sallt->variable ,gensalt->generate salt
    this.password =await bcrypt.hash(this.password,salt);
});
 
//JSON WEBTOKEN
  userSchema.methods.createJWT =function(){
    return JWT.sign({userId:this._id},process.env.JWT_SECRET, {expiresIn:'1d'})
  }    
export default mongoose.model('User',userSchema )