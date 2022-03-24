const express=require("express");
const mongoose=require("mongoose");
const Post=require("./models/Post");
const methodOvveride=require('method-override');
const ejs=require("ejs");
const app=express();
const postController=require("./controllers/postControllers");
const pageControllers=require("./controllers/pageControllers");


mongoose.connect('mongodb://localhost/cleanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set('view engine','ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOvveride('_method',{
    methods:['POST','GET']
}));
app.get('/',postController.getAllPost)
app.get("/about",pageControllers.aboutPost)
app.get("/add_post",pageControllers.addPostPage)
app.get("/post",pageControllers.PostPage)
app.get('/posts/:id',postController.getPost);

app.post('/posts',postController.createPost)
  app.put('/posts/:id',postController.updatePost)
app.delete('/posts/:id',postController.deletePost)
app.get("/posts/edit_post/:id",pageControllers.editPostPage)
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`sunucu ${PORT} da başladı`);
})