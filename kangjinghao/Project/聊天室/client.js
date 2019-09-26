'use strict';
var net = require('net');
var hostname = process.argv[2];//放主机名
var port = process.argv[3];//放端口
// process.argv[] ,0是node,1是脚本名字,2是随机参数可以传参存参数
var client = net.connect({host:hostname,port:port},
    function () {
        console.log("connect to server...");
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable',function () {
            var chunk = process.stdin.read();
            if(chunk != null) {
                client.write('data:' + chunk);
            }
        });
    });
    client.on('data',function (data) {
        console.log(data.toString());
        //client.end();
    });
    client.on('end',function () {
        console.log('Disconnected from server !');
});