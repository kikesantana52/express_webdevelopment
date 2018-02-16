var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function (req,res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
  var thing = req.params.thing;
  res.render("love",{thing : thing});
});
app.get("/posts",function (req,res) {
  var posts = [
    {tittle : "Post1", author: "Luis"},
    {tittle : "Post2", author: "Luis"},
    {tittle : "Post3", author: "Luis"},
    {tittle : "Post4", author: "Luis"}
  ];
  res.render("posts",{posts:posts});
})
app.listen(2000,function () {
  console.log("Server is listening!!!");
});
