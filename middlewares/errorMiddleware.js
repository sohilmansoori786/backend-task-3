//error Middleware //decide next function execution
const errorMiddleware = (err,req,res,next)=>{
    console.log(err);
    res.send({
        success:false,
        message:err.message||err,
        err,
    });
};

export default errorMiddleware;

