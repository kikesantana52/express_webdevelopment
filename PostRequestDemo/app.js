var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({exended:true}));
app.set("view engine", "ejs");


var friends = ["Luis", "Jacky","Diana","Iker"];


app.get("/",(req,res)=>{
  res.render("home");
});

app.post("/addfriend",(req,res)=>{
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends",(req,res)=>{
  res.render("friends", {friends: friends});
});



app.listen(2000,()=>{
  console.log("Server started at port 2000!!!");
});
