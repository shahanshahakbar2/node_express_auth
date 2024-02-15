// if we add authentication here automatically we get the user id
// we can use user id as a reference to field the requirements of users by using user id

const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  user:{
    type:String,
    required:true,
    
  },
  info:{
    type:Object,
    required:true,
  },
  isActive:{
    type:Boolean,
    default:true,
  },
},{
  collection:'files',
  timestamps:true
})
module.exports = mongoose.model('FileSchema',fileSchema)