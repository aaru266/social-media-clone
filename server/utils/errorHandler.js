const errorHandler=(error,req,res,next)=>{
    console.log(error.code);
    if(error.code===11000 ){
        error.status=403;
        error.message='Username already exist'
    }
    if(error){
        res.status(error.status||500);
        res.send({success:false,message:error.message});
    }
}

module.exports = errorHandler;