const mongoose=require('mongoose');
const crypto=require('crypto');
//const uuidv1=require('uuid/v1');
const { v1: uuidv1 } = require('uuid');
uuidv1();
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    username:{
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password:{
        type: String,
        required: true,
        
    },
    mobile_no:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    location:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    salt:String, 
},

{timestamp:true}

);

//virtual field
userSchema.virtual('password')
.set(function(password){
    this._password=password
    this.salt=uuidv1()
    this.hashed_password=this.encryptPassword(password)
})
.get(function(){
    return this._password
})
userSchema.methods={
    authenticate:function(plaintext){
        return this.encryptPassword(plaintext)=== this.hashed_password;
    },



    encryptPassword:function(password){
        if(!password) return '';
        try{
            return crypto.createHmac('sha1',this.salt)
                            .update(password)
                            .digest('hex')
        }catch(err){
            return "";
        }
         

    }
};
module.exports=mongoose.model("User",userSchema);
