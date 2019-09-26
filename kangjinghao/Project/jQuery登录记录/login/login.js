'use strict';

$(document).ready(function(){
    $("#login").click(function(){
        var username = $('#username').val();
        var password = $('#password').val();
        var ctime =new Date().getTime();
        $.ajax({
            method: "POST",
            url: "/", // 默认当前页面
            async:false,
            crossDomain:true,
            data:{
                username: username,
                password: password,
                ctime: ctime,
            },
            // dataType:'json',
            success: function (data, textStatus) {
                // console.log("username:   ", username);
                // console.log("ctime:   ", ctime);
                // console.log("data:   ", data);
                // console.log("加载状态: ",textStatus);
                window.location=('password.html')
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("请求在连接过程中出现错误..\n" + errorThrown);
            }
        });
    });
});


