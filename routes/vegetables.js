const express=require('express');
const router=express.Router()
const { add,vegetableById,read,remove,update} = require("../controllers/vegetables");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
router.get("/vegetables/:vegetableId",read)
router.post('/vegetables/add/:userId', requireSignin,add);
router.delete("/vegetables/:vegetableId/:userId",requireSignin,remove)
router.put("/vegetables/:vegetableId/:userId",requireSignin,update)
router.param("userId",userById);
router.param("vegetableId",vegetableById);


module.exports=router; 