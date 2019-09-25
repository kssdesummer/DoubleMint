var url=require('url');
var http=require('http');
var get=require('./node_get');
var post=require('./node_post');
http.createServer(function (req, res){
    if(req.method=="GET"){
        get.doGet(req,res);
    }else if (req.method=="POST"){
        post.doPost(req,res);
    }else {
        res.end();
    }
}).listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080');