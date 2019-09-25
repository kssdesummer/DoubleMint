var net =require('net');
var clientList=[];
var server=net.createServer(function (socket){
    clientList.push(socket);
    socket.write('success! \r\n');
    socket.on('data',function(data){
        console.log(data.toString());
        broadcast(data);
    });
    socket.on('end',function(){
        var i=0;
        var len=clientList.length;
        if(socket){
            for (i ; i < len; i++) {
                if (clientList[i] == socket){
                    clientList.splice(i,1);
                }
            }
        }
         if(clientList.length==0){
             socket.write('end');
         }   
    });
});
function broadcast(data){
    for(var i=0;i<clientList.length;i++){
        clientList[i].write(data);
    }
}
server.listen(1337,'127.0.0.1'); 