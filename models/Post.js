const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema=new Schema({
    title:String, 
    detail:String,
     dateCreated:{
        type:Date,
        default:Date.now
     } 
});
Post=mongoose.model("Post",PostSchema);
module.exports=Post;