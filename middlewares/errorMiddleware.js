//error Middleware //decide next function execution
const errorMiddleware = (err,req,res,next)=>{
    console.log(err);
    res.send({
        success:false,
        message:"Something went wrong",
        err,
    });
};

export default errorMiddleware;

