# Nodejs

### Node.js 和 npm 的安装

1. node.js下载地址：https://nodejs.org/en/
2. 在文件夹直接解压或者用`tar -zxvf 压缩包`
3. 在解压文件里找到node和npm位置：`bin`目录下面
4. 将node和npm链接到全局符号：
   1.  `sudo ln -s 全路径/node /usr/bin/node`
   2. `sudo ln -s 全路径/npm /usr/bin/npm`

5. 在任意目录下使用`node -v`或者`npm -v` 就可以看到相关版本号
6. 安装完成

### node程序

​	1. 在js文档的第一行总是写上`use strict`; 表明这是一个js代码

2. 在js文件中想要查看的结果用`console.log("hello world")`
3. `node --use strict hello.js`使用严格模式

### 搭建Node开发环境

​	推荐使用 visual studio code

### 模块

```javascript
hello.js
function greet(){
	console.log("1");//在终端控制台显示输出
	}
module.exports = greet;	//将greet函数声明出去，别的模块也可以使用

main.js
var greet =require('./hello');	//使用时只需要再次声明，并且要加上该模块的路径和名字
```

### CommonJS规范

​	定义就是各个模块间的变量互不影响，想要使用别的模块的变量，就需要用moudule.export和require来传输和接受

### fs模块

​	fs：是Node.js的模块，负责读写文件(同步或异步)

 1. 读文件

     1. 异步：

        `fs.readFile('111.txt','utf-8',function(err,data){});`

    2. 同步：

       `var data = fs.readFileSync('sample.txt', 'utf-8');`

2.  写文件

   1. 异步：

      `fs.writeFile('output.txt',data,function(err){});`

   2. 同步：

      `fs.writeFileSync('output.txt', data);`

3. 查看文件信息

   1. `fs.stat('output.txt',function(err,stat){});`
   
   ```javascript
   'use strict';
   
   var fs = require('fs');
   
   fs.stat('sample.txt', function (err, stat) {
       if (err) {
           console.log(err);
       } else {
           // 是否是文件:
           console.log('isFile: ' + stat.isFile());
           // 是否是目录:
           console.log('isDirectory: ' + stat.isDirectory());
           if (stat.isFile()) {
               // 文件大小:
               console.log('size: ' + stat.size);
               // 创建时间, Date对象:
               console.log('birth time: ' + stat.birthtime);
               // 修改时间, Date对象:
               console.log('modified time: ' + stat.mtime);
           }
       }
   });
   运行结果如下：
   
   isFile: true
   isDirectory: false
   size: 181
   birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
   modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)
   ```
   
   

### stream 模块

​	输入输出流

```javascript
'use strict';

var fs = require('fs');

// fs.createReadStream读取 打开一个流:打开格式要设置！
var rs = fs.createReadStream('example.txt', 'utf-8');
//data事件表示流的数据已经可以读取了
rs.on('data', function (data) {
    console.log('DATA:');
    console.log(data);
});
// end事件表示这个流已经到末尾了，没有数据可以读取了
rs.on('end', function () {
    console.log('END');
});
//error事件表示出错了。
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// fs.createWriteStream 写入流
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

// var ws2 = fs.createWriteStream('output1.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// pipe：管道，可以将写入流与读取流连接
var rs = fs.createReadStream('example.txt');//读取
var ws = fs.createWriteStream('copied.txt');//写入
rs.pipe(ws);//将读取的内容写入copied.txt
// rs.pipe(ws,{end:false}); end事件触发后不关闭
/*默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
readable.pipe(writable, { end: false });
 */
```

### http模块

​	利用Node.js模块可以直接使用tcp连接以及解析HTTP，而我们只需要去操作http模块提供的request和response对象。

​	request对象：封装了http请求，调用resquest属性和方法可以拿到http请求的所有信息

​	response对象：封装了http响应，调用response对象的方法，就能把http的响应返回给浏览器

* 搭建一个简单的服务器：

```javascript
'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置html类型和utf8编码格式 Content-Type: text/html;charset=utf8，:'use strict';

var fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
运行结果如下：

isFile: true
isDirectory: false
size: 181
birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    // 将HTTP响应的HTML内容写入response:
    response.write('<input name="user"><br/>');
    response.write('<input name="password"><br/>');
    response.write('<input type="submit">');
    response.end('<h1>Hello world!</h1>');
    //end 和 write 都可以不写，但是response.end()必须要有
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
```

### url模块

​	用来解析url对象：

```javascript
'use strict';

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
结果如下：

Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }
```



### path模块相关

​	用来方便的构造目录

[相关资料]: http://nodejs.cn/api/path.html	"相关函数"

* 构造目录

```javascript
'use strict';

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
//得到完整的路径 '/Users/michael/pub/index.html'
```



* 搭建一个简单的文件服务器：
  * 需求分析：
    1. 本机可以直接访问：http://127.0.0.1:8080/
    2. 能够读取本机的文档（html/txt）
    3. 如果是目录，查找该目录下是否有index.html文档，有则打开，无则返回404

```javascript
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
```

