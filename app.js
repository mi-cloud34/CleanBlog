const express=require("express");
const mongoose=require("mongoose");
const Post=require("./models/Post");
const ejs=require("ejs");
const app=express();

mongoose.connect('mongodb://localhost/cleanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set('view engine','ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',async (req,res)=>{
    const posts=await Post.find({});
    res.render('index',{
        posts
    });
    //eklememişsin ki?
//res.sendFile(path.resolve(__dirname,'temp/index.html'))
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/add_post",(req,res)=>{
    res.render('add_post');
})
app.get("/post",(req,res)=>{
    res.render('post');
})
app.get('/posts/:id',async (req,res)=> {
    //res.render('about');
    //console.log(req.params.id);
    const post=await Post.findById(req.params.id);
    res.render("post",{
        post
    });
})
app.post('/posts',async (req,res)=>{
    await  Post.create(req.body)
      res.redirect("/");
  })
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`sunucu ${PORT} da başladı`);
})