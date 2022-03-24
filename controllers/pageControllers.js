const Post=require("../models/Post")

exports.aboutPost=(req,res)=>{
    res.render('about');
}
exports.addPostPage=(req,res)=>{
    res.render('add_post');
}
exports.PostPage=(req,res)=>{
    res.render('post');
}
exports.editPostPage=async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit_post', {
      post,
    });
  }