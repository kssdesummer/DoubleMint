     function abc(){
        title = $("#title").val();
        text=$("#text").val();
        if($("#title").val()==""){
            alert("标题不能为空");
            return;
        }
        if($("#text").val()==""){
            alert("文章内容不能为空");
            return;
        }
        $.ajax({
            type: "POST",
            dataType:"text",
            url: "http://localhost:3000/",
            data: {
               "title":title,
                "message":text
            },
            success: function () {
                alert("提交成功");
                window.location.assign("show.html");
            },
            error: function () {
                alert("提交失败");
            }
        });    
    };