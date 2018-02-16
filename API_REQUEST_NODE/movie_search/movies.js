/*
  UPDATE: AT THE END WE HAVE TO ADD apikey=thewdb TO FIND THE MOVIE WE ARE TRYING TO REACH
*/
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var request = require('request');

 app.use(bodyParser.urlencoded({exended:true}));
 app.set("view engine", "ejs");


 app.get('/',(req,res)=>{
   res.render("search");
 });
 app.get("/results",(req,res)=>{
   var title = req.query.movie_tittle;
   var url = "http://www.omdbapi.com/?s="+ title +"&apikey=thewdb";
   console.log(url);
     request(url,function(error,response,body) {
       if (!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           res.render("results",{data: data});
       }
 });
 });




app.listen(2000,()=>{
  console.log("Server started at port 2000!!!");
});
