// models/Post.js
var mongoose = require('mongoose');

// Schema
var postSchema = mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String, require:true},
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date},
});

// model & export

var Post = mongoose.model('post', postSchema);
module.exports = Post;
