"use strict";
var net = require("net");
var clientList = [];
var count = 0;

var server = net.createServer(function(socket){
    clientList.push(socket);
    count++;
    console.log(count);
    socket.write("success!\r\n");
    //socket.pipe(socket);
    socket.on("data",function(data){
        console.log(data.toString());
        //socket.write(data);
        broadcast(data);
    });

    socket.on('end', function(){
        console.log('connection closed');
        var index = clientList.indexOf(socket);
        clientList.splice(index, 1);
    });


});
function broadcast(data){
    for(var i = 0; i < clientList.length; i++){
        clientList[i].write(data);      
    }
}
server.listen(8080,"127.0.0.1");

