var express = require("express");
var app = express();
/*
var mongoClient = require("mongodb").MongoClient;
var mongoDB = null;

mongoClient.connect()
*/

app.use(express.static("testWebGl"));

app.get("/", function(req, res){
    res.redirect("/index.html");
});

app.get("*", function(req, res, next){
    if (!req.path.match(/\..*$/)) {
        res.redirect(req.path + "index.html");
    }
    next();
});

//mongoDB pass: BugHyopVolshyo4

app.listen(8080, function(){console.log("Server is listening on 8080 port");})
