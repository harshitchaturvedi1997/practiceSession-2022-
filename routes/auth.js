

const router=require("express").Router();

const User=require('../model/User');


//crete a post method and responce send as string
router.post("/register",async(req,res)=>{
    const user =new User({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password
    });
try{
  const savedUser= await user.save();
  res.send(savedUser);
}catch(err){
 res.send(400).send(err)
}

});
  
module.exports=router;









// export module 
module.exports=router;