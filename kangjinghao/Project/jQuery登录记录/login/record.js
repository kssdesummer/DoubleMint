'use strict';

function getContent(){
    var xmlhttpRequest=new XMLHttpRequest();
    xmlhttpRequest.open("GET","./info.txt",false);
    xmlhttpRequest.send();
    var xmlDoc=xmlhttpRequest.responseText;
    return xmlDoc;
}
var a = getContent();
var b = a.replace(/}{/g,'}*{');
var datas = b.split('*');
// console.log( datas);
// for(var i=0;i<datas.length;i++){
//     console.log(JSON.parse(datas[i]).username);
// }
$(document).ready(function(){
        $.ajax({
            url:"./info.txt",
            type:"get",
            contentType:'application/json',
            // success(data,textStatus) {
            success(data,textStatus) {
                for (var i = 0; i < datas.length; i++) {
                    var username = JSON.parse(datas[i]).username;
                    var password = JSON.parse(datas[i]).password;
                    var ctime = JSON.parse(datas[i]).ctime;
                    $('tbody').append('<tr>' + '<td>' + username + '</td>' + '<td>' + password + '</td>'+ '<td>' + ctime + '</td>' + '</tr>')
                }
            }
        })

});
