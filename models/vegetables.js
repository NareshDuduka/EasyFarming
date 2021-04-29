const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema;
const vegetableSchema=new mongoose.Schema({
    item_name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    price:{
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    quantity:{
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    farmer_id:{
        type: ObjectId,
        ref:"User",
        required: true
        
    },
    photo:{
        data:Buffer,
        contentType:String,

    }
  
  
},
   
{timestamp:true}

);


module.exports=mongoose.model("Vegetable",vegetableSchema);
