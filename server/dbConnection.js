const mongoose= require('mongoose');
const DB_URL='mongodb+srv://aaradhayakhandelwal:aaru1234@cluster0.j2uj8va.mongodb.net/'

mongoose.connect(DB_URL).then(data=>{
    console.log("connection successful");
}).catch(err=>console.log(err));

module.exports={}