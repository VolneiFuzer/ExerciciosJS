var express = require("express");
var app = express();

app.use(express.static("static"));

app.get("/", function(req, res){
    res.send("<html><body><img src='lobos_018.jpg'/></body></html>");
});

var server = app.listen(8081, function(){
    console.log("Server running at http://127.0.0.1:8081/");
});