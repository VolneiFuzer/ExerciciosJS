var express = require("express");
var app = express();
 
app.get("/", function (req, res){
    console.log("Requisicao GET para a homepage");
    res.send("Hello GET");
});
 
app.post("/", function (req, res){
    console.log("Requisicao POST para a homepage");
    res.send("Hello POST");
});
 
app.delete("/del_user", function (req, res){
    console.log("Requisicao DELETE para /del_user");
    res.send("Hello DELETE");
});
 
app.get("/list_user", function (req, res){
    console.log("Requisicao GET para /list_user");
    res.send("Page Listing");
});
 
app.get("/ab*cd", function(req, res){
    console.log("Requisicao GET para /ab*cd");
    res.send("Page Pattern Match");
});
 
var server = app.listen(8081, function (){
    console.log("Server running at http://127.0.0.1:8081/");
});