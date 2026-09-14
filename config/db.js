import mongoose from 'mongoose'
import colors from 'colors'

const connectDB =async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_LOCAL_URL);
        console.log(
            `Connected to MongoDb Database ${mongoose.connection.host}`.bgCyan.blue
        );
    }catch (error){
        console.log(`MongoDb Error ${error}`.bgRed.white);
    }
    
};
export default connectDB;