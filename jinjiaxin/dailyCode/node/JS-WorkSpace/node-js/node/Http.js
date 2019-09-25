"use strict"
var fs = require("fs");
var url = require("url");
var http = require("http");
var path = require("path");

var root = path.resolve(process.argv[2] || ".");
console.log("static root dir" + r
var server = http.createServer(function(request,response){
    var patnName = url.parse(request.url).pathname;
    var filepath = path.join(root,patnName);
    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            console.log("200" + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            //console.log("404"+ request.url);
            //response.writeHead(404);
           // response.end("404 Not Found");
            var f = path.join(root,"index.html");
            fs.createReadStream(f).pipe(response);
        }
    });
});

server.listen(8080);
console.log("Server is running at http://localhost:8080/");