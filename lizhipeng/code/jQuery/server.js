'use strict';

var http =require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
var path = require('path');


var root = path.resolve(process.argv[2] || '.');

var  server=http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + req.url);
            // 发送200响应:
            res.writeHead(200,{'Content-Type':'text/html;charset= utf-8'});
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(res);
            // res.end();
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + req.url);
            // 发送404响应:
            res.writeHead(404);
            res.end('404 Not Found');
        }
    });

    if(req.method == "POST"){
        console.log("Ajax调取")
       var formdata="";
        req.on('data',function (data) {     
            console.log ("服务器接受到数据："+data);
            formdata+=data;
        });
        req.on('end', function () {
            var obj = qs.parse(formdata);
            var d = new Date();
            var arr = Array();
            arr[0] = obj.title;
            arr[1] = obj.message;
            arr[2] =d.toLocaleString();
            fs.appendFile('text.html',arr+"\n",function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('数据写入成功！');
                }
            });
            res.end();
        }
        )
    }
        
    //14212
})
server.listen(3000);

console.log("Server running at http://127.0.0.1:3000");