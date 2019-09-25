"use strict"
var 
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    http = require("http");

var root = path.resolve(process.argv[2] || ".");
console.log("static root dir" + root);

var server = http.createServer(function(request,response){
    var pathName = url.parse(request.url).pathname;
    var filepath = path.join(root,pathName);
    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            console.log("200" + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else if(!err){
            var f = path.join(root,"index.html");
            fs.createReadStream(f).pipe(response);
        }else{
            console.log("404" + request.url);
            response.writeHead(404);
            response.end("404 Not Found");
            
        }
    });
});
server.listen(8080);
console.log("Server is running at http://localhost:8080/");
