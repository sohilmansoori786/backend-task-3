import JWT from 'jsonwebtoken'

const userAuth=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        next('Authentication Failed')
}
  const token= authHeader.split(' ')[1] 
   try{
       const payload=JWT.verify(token,process.env.JWT_SECRET)      //token is compared with secret key and dcrypt
       req.user={ userId:payload.userId }                            //userId is stored in req object
       next();
   }
   catch (error){
    next('Authentication Failed')
   }
};
 
export default userAuth;