const requestLogger= (req,res,next)=>{
    const data=`${new Date()} ${req.path} ${req.params}`
    console.log(data);
     next();
}

module.exports = requestLogger;