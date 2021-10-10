var express = require('express');
var User = require('../model/userDetails');

var mongoose = require('mongoose');

var userDeailRouter = express.Router();

userDeailRouter.post('/createUser',function(req,res){
    console.log(req.body)
    var usData=new User(req.body)
    usData.save(function(err,result){
      if(err){
        res.status(400).json({message:"Please enter valid data"})
      }else{
        res.status(200).json({message:"Successfully Updateed. Our Team Will Contact You Shortly. "})

      }
       
    })
  
})

userDeailRouter.get('/getBikeUsers',function(req,res){
 

    User.find({vehicleType:"Bike"},function(err,result){
      if(err){
        res.status(400).json({message:"Please enter valid data"})
      }else{
        res.status(200).json({data:result})

      }
    })
  
})

userDeailRouter.get('/getCarUsers',function(req,res){
 

  User.find({vehicleType:"Car"},function(err,result){
    if(err){
      res.status(400).json({message:"Please enter valid data"})
    }else{
      res.status(200).json({data:result})

    }
  })

})

.put('/updateUser',function(req,res) {

  User.findOneAndUpdate({_id:req.body._id},req.body,function(err,result){
    if(err){
      res.status(400).json({message:"Please enter valid data"})
    }else{
      res.status(200).json({data:result})

    }
  })

    
  })

  .post('/deleteUser',function(req,res) {

User.findOneAndDelete({_id:req.body._id},req.body,function(err,results){
  if(err){
    res.status(400).json({message:"Please try again after some time"})
  }else{
    res.status(200).json({message:"deleted successfully"})

  }
})
   
  });

module.exports = userDeailRouter;