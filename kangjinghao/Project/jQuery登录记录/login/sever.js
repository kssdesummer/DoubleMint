var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
var qs = require('querystring');
var crypto = require('crypto');
// 构造目录，默认为当前目录，假设不再当前目录，则构造为绝对路径
var root = path.resolve(process.argv[2] || '.');
var server = http.createServer(function(request,response){
    //解析请求网址，得到pathname
    var pathname = url.parse(request.url).pathname;
    if(pathname==="/") pathname="login.html";
    // 用path模块拼接路径，得到完整目录
    var filePath = path.join(root,pathname);
    //console.log('filePath : '+filePath);
    // fs模块获取文件信息，用来判断文件是目录还是文档
    fs.stat(filePath,function(err,stats){
        // 如果没错并且文件信息是一个文档
        let type = pathname.substr(pathname.lastIndexOf(".") + 1, pathname.length); //文件类型
        if(!err && stats.isFile()){
            //打印状态200：请求的地址
            // console.log('200 '+request.url);
            //响应头200，设置编码格式为utf8，类型为text/html
            response.writeHead(200,{'Content-Type':'text/'+type+';charset=UTF8'});
            // 将读到的内容流向response
            fs.createReadStream(filePath).pipe(response);
            request.on('data',function (data) {
                // console.log(data.toString()); 打印buffer转成的字符串
                let obj = qs.parse(data.toString());
                var md5 = crypto.createHash('md5');
                obj.password = md5.update(obj.password.toString()).digest('hex');
                var datas= JSON.stringify(obj);
                // console.log(datas); 打印转成的json字符串
                fs.appendFile('./info.txt',datas,function (error) {
                    if(error){
                        console.log('写入失败');
                    }else{
                        console.log('写入成功');
                        // var aa = JSON.parse(fs.readFileSync('info.txt', 'utf-8'));
                        // var aa = eval('['+datas+"]");
                        // console.log("读取数据用户名: "+aa[0].username);
                        // console.log("读取数据密码: "+aa[0].password);
                    }
                });
            });
        }else{
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