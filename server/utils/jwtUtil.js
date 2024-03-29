const {sign,verify,decode}=require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_KEY='MySecretKey';

const generateToken =  (data)=>{
    const token =sign(data,SECRET_KEY)
    console.log({token});
    return token;
};

const verifyToken = (token)=>{
    try{
        const verified = verify(token,SECRET_KEY);
        console.log(verified);
        return verified;
    }catch(error){
        console.log(error);
    }
}
 
module.exports={generateToken,verifyToken}