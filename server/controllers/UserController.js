const UserModel = require("../models/Usermodel");
const {createUser,findUser}= require("../models/Usermodel");
const { generateToken,verifyToken } = require("../utils/jwtUtil");
const {createPwdHash,verifyPassword}=require("../utils/passwordUtils");
const { errorCreator,responseCreator } = require("../utils/responseHandler");

const signup= async(req,res,next)=>{
    //signup logic
 try {
      const userData=req.body;
      const {password}=userData;
      const pwdHash= await createPwdHash(password);
      userData.password=pwdHash;
      const data=await createUser(userData);
      if(data){
        res.send({success:true,message:'Account created successfully!!'});
      }
 } catch (error) {
    next(error);
 }
}

const login= async(req,res,next)=>{
   try {
      const { username, password } = req.body;
      const { password: pwdHash,secret, ...user } = await findUser(username);
      if (await (verifyPassword(password, pwdHash))) {
          const token = generateToken(user);
          console.log({ token }, "user controller");
          res.cookie('token', token, { maxAge: 3600 * 1000, httpOnly: true });
          res.send({
              success: true, message: `${username} loggedin successfully`,
              data: user
          });
      } else {
          const err = new Error('Incorrect Password!!!');
          err.status = 401;
          throw err;
      }
  } catch (error) {
      next(error)
  }
}

const authMiddleware = async(req,res,next)=>{
   try {
      const { token = null} = req.cookies;
      console.log('cookie', req.cookies);
      const { username } = verifyToken(token);
      console.log({ username });
      // check if user exists in db;
      const { password, ...userData } = await UserModel.findUser(username);
      // res.status(200).send(responseCreator('user autenticated with token', userData));
      res.locals.userData = userData;
      next();
  } catch (error) {
      next(error)
  }
}
const loginWithCookie = async (req, res, next) => {
   try {
       res.send(responseCreator("User authenticated with Cookie", res.locals.userData));
   } catch (error) {
       next(error);
   }
};


module.exports = {signup, login,authMiddleware,loginWithCookie };