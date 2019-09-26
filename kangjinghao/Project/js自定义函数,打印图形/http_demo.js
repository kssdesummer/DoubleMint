'use strict';
/*
var http = require('http');
var server = http.createServer(function(request,response){
    console.log(request.method+': '+request.url);
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>来了老弟！S</h1>');
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');


var url = require('url');
console.log(url.parse('https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/Deprecation%20Warning%3A%20Buffer()%20is%20deprecated%20due%20to%20security%20and%20usability%20issues.%20Please%20use%20the%20Buffer%20alloc()%2C%20Buffer%20allocUnsafe()%2C%20or%20Buffer.from()%20methods%20instead.'))

var path = require('path');
var workdir = path.resolve('.');    //将当前路径转化为绝对路径
var filePath = path.join(workdir,'pub','index.html');
console.log(filePath);
console.log(workdir);

//process的基本用法
//node 交互模式的输入，相当于函数中的scanf
process.stdin.resume(); 
//将输入数据传入函数
process.stdin.on('data',function(data){
// stdout 输出结果
process.stdout.write("you write is "+data.toString());
});
*/


//导入fs模块：用来读取文档内容，path：构造目录，url：解析http网址，http：得到请求和响应
var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
// 构造目录，默认为当前目录，假设不再当前目录，则构造为绝对路径
var root = path.resolve(process.argv[2] || '.');
// 打印root目录
console.log('Root dir : ' + root);
// 创建一个服务器，利用http模块，得到请求request和响应response
var server = http.createServer(function(request,response){
    //解析请求网址，得到pathname
    var pathname = url.parse(request.url).pathname;
    // 用path模块拼接路径，得到完整目录
    var filePath = path.join(root,pathname);
    //console.log('filePath : '+filePath);
    // fs模块获取文件信息，用来判断文件是目录还是文档
    fs.stat(filePath,function(err,stats){
        // 如果没错并且文件信息是一个文档
        if(!err && stats.isFile()){
            //打印状态200：请求的地址
            console.log('200 '+request.url);
            //响应头200，设置编码格式为utf8，类型为text/html
            response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            // 将读到的内容流向response
            fs.createReadStream(filePath).pipe(response);
            //条件：不出错而且是一个目录，拼接目录
        }else if(!err && stats.isDirectory()){
            console.log(filePath+' isDir');
            var html = path.join(filePath,'index.html');
            console.log('200 '+request.url+'/index.html');
            response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            fs.createReadStream(html).pipe(response);
        } else{
            console.log('404 '+request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
// 监听8080端口
server.listen(8080);
// 代码正常运行给一个提示
console.log('Server is running at http://127.0.0.1:8080/');