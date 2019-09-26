$(function(){
    $.ajax({
        url:"File.txt",
        type:"GET",
        dataType:"text",
        contentType:"application/text",
        success:function(data){
            $("input").val("");
            $("textarea").val("");
            var str = data.split(",");
            str.pop();
            console.log(str.length);
            console.log(str);
            $(".p").empty();
            for(var i = 0;i<str.length;i+=3) {
                var card = "<div class=\"card  \">"+"<div class=\"card-header\">"+str[i]+"<sapn class='s'>"+str[i+2]+"</span>"+"</div>"+"<div class=\"card-body\">"+str[i+1]+"</div>"/*+"<div class=\"card-footer\">"+str[i+2]+"</div>"*/+"</div>";
                $(".p").prepend(card);
            }
        }
    });
})

$(".btn").on("click",function(){

    var myDate = new Date();
    //获取当前年
    var year=myDate.getFullYear();
    //获取当前月
    var month=myDate.getMonth()+1;
    //获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();
    var now = year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
    var name = $(".i1").val();
    var nr = $(".i2").val();
    var yonghu  = name+","+nr+","+now+",";
    if(name == "" || nr == ""){
        alert("用户名或内容不能为空,请重新输入")
        return false;
    }

    $.ajax({
        method:'POST',
        url:'File.js',
        data:yonghu,
        // contentType:"application/text",
        success:function(data,textstatus){

            console.log(textstatus);
        }
    });

    $.ajax({
        url:"File.txt",
        type:"GET",
        dataType:"text",
        contentType:"application/text",
        success:function(data){
            $("input").val("");
            $("textarea").val("");
            var str = data.split(",");
            str.pop();
            console.log(str.length);
            console.log(str);
            $(".p").empty();
            for(var i = 0;i<str.length;i+=3) {
                var card = "<div class=\"card  \">"+"<div class=\"card-header\">"+str[i]+"<sapn class='s'>"+str[i+2]+"</span>"+"</div>"+"<div class=\"card-body\">"+str[i+1]+"</div>"/*+"<div class=\"card-footer\">"+str[i+2]+"</div>"*/+"</div>";
                $(".p").prepend(card);
           }
        }
    });
    return false;
});



