'use strict';
var net = require('net');
var clientList = [];
//创建一个net连接,function回调函数,参数是套接字,全双工通讯
var server = net.createServer(function(socket){
    clientList.push(socket);
    // socket.write('sucess!\r\n');
    // 将上面的数据传给socket
    // socket.pipe(socket);
    socket.on('data',function (data) {
        console.log(data.toString());
        //socket.write(data);
        boradcast(data);
    });
    socket.on('end',function () {
        socket.write('end');
    })
});
console.log("Server is running at http://127.0.0.1:8080/");
function boradcast(data){
    for(var i = 0;i<clientList.length;i++){
        clientList[i].write(data);
    }
}
server.listen(8080,'127.0.0.1');