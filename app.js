const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog);
});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`sunucu ${PORT} da başladı`);
})