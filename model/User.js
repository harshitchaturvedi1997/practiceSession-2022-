const mongoose =require('mongoose')

const userSchema =new mongoose.Schema({
  name:{
     type:String,
     required:true,
     min:6,
     max:200,
  },
  email:{
      type:String,
      required:true,
      max:255,
      min:6,
  }, 
  password:{
   type:String,
   require:true,
   max:1024,
   min:6,
  },
  date:{
      type:Date,
      default:Date.now
  },



})


// export mongoose module 
module.exports= mongoose.model('User',userSchema);