var qs=require('querystring')
function doPost(req,res){
    var formDate='';
    req.on('data',function(data){
        formDate+=data;
    });
    req.on('end',function(){
        var obj=qs.parse(formDate);
        console.log(obj);
        res.end();
    })
}
exports.doPost=doPost;