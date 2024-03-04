const speakeasy=require("speakeasy");
const QRCode = require("qrcode")

const getQRImage= async()=>{
    const {base32:secret,otpauth_url}=speakeasy.generateSecret({name:'Aaradhaya'});
    console.log(secret);
    const data = await QRCode.toDataURL(otpauth_url);
    console.log(data);
}
const verifyOTP =(otp,secret)=>{
     return speakeasy.totp.verify({
        secret,
        encoding:'base32',
        token:otp,
    })
}

    module.exports={getQRImage,verifyOTP};


