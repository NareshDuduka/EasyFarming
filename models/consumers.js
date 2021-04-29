const mongoose=require('mongoose')
const crypto=require('crypto')
const uuidv1=require('uuid/v1')

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
        maxlength: 32
    },
    password:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
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
    }

})