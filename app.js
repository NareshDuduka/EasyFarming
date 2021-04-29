//require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const expressValidator=require('express-validator')
const cors=require("cors")
const dotenv = require('dotenv'); 
dotenv.config();

//import routes
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')

const vegetablesRoutes=require('./routes/vegetables')


//dotenv.config()
// app
const app=express()

//database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    //useUnifiedTopology= true

}).then(()=>console.log("DB Connected"));

//middlewares
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(expressValidator());
// app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

console.log("hi");
//routes middleware
//app.use(userRoutes);
app.use("/api",authRoutes);
app.use("/api",userRoutes);

app.use("/api",vegetablesRoutes);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});