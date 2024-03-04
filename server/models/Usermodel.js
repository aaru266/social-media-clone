//create,find,update,delete user

const mongoose= require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username:{
    type:String,
    unique:true,
    required:[true,"username is mandatory!!!"],
  },
  name:{
    type:String,
    required:[true,"username is mandatory!!!"],
  },
  password:{
    type:String,
    validate:{
        validator:(value)=>value.length>=8,
        message:(data)=>'Password should be atleast 8 characters!'
    }
  },
  secret:{
    type:String,
  }
});

userSchema.statics.createUser =async (userdata)=>{
const data= await UserModel.create(userdata)
console.log(data);
if(data){
    return data
}
}

userSchema.statics.findUser= async(username)=>{
    const userdata=(await UserModel.findOne({username},{_id:0,__v:0}))?.toObject();
    if (userdata) {
        return userdata;
    }
    else{
        const err=new Error("user doesn't exist");
        err.status=404;
        throw err;
    }

}


const UserModel= mongoose.model('users',userSchema);

module.exports= UserModel;