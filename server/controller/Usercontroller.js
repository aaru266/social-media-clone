const {createuser,finduser}= require("../models/Usermodel")
const {createPasswordHash,verifyPasswordHash}=require("../utils/passwoedUtils")
const signup= async(req,res,next)=>{
    //signup logic
    try {
        const userData=req.body;
        if(finduser(userData.username)){
            const pwdhash=createPasswordHash(userData.password)
            userData.password=pwdhash
            const err=new Error("userID already exist")
            err.status=403;
            throw err
        }
        
        else{
            const data= createuser(userData);
            if(data.insertedCount){
                res.send({success:true,message:"Account created successfully!"})
            }
        }
    } catch (error) {
        next(error)
    }
}

const login= async(req,res,next)=>{
    

}

module.exports = {signup, login};