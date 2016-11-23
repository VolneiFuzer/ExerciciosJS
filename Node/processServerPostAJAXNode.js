var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("static"));
var pessoas = [];
 
app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/static/" + "userFormPostAJAXNode.html" );
});
 
app.get("/list.html", function(req, res){
    res.end(JSON.stringify(pessoas));
});
 
app.post("/cadastrarPessoa", urlEncodedParser, function(req, res){
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    pessoas.push(response);
    console.log(response);
    res.end(JSON.stringify(response));
});
 
var server = app.listen(8081, function (){
    console.log("Server running at http://127.0.0.1:8081/");
});