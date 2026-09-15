import mongoose from"mongoose"
import validator from"validator"


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
export default mongoose.model('User',userSchema )