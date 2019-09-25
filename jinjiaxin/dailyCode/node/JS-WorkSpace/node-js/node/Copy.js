"use strict"

//流文件-写

var fs = require("fs");
var rs = fs.createReadStream("sample.txt","utf-8");
rs.on("data",function(chunk){
    console.log("DATA");
    console.log(chunk);
    
});
rs.on("end",function(){
    console.log("end");
});
rs.on("error",function(err){
    console.log("ERROR:" + err);
});
// 流文件-写
var fs = require("fs");
var wsl = fs.createWriteStream("output.txt","utf-8");
wsl.write("END.");
wsl.end();
//pipe复制
var fs = require("fs");
var rs = fs.createReadStream("sample.txt");
var wsl = fs.createWriteStream("output.txt");
rs.pipe(wsl);
