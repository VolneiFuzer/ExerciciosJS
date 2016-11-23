var express = require("express");
var app = express();

app.use(express.static("static"));

app.get("/index.html", function(req, res){
    res.sendFile(__dirname + "/static/" + "userFormGet.html");
});

app.get("/processGet", function(req, res){
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
    console.log("Server running at http://127.0.0.1:8081/");
});