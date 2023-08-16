const errorHandler=(error,req,res,next)=>{
    console.log("error handler");
    if(error){
        res.status(error.status||500);
        res.send({success:false,message:error.message});
    }
}

module.exports = errorHandler;