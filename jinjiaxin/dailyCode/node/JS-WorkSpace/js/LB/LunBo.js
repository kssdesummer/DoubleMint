//浏览器加载完之后就加载的方法
window.onload = function(){
    //获取ID为container的元素
    var container = document.getElementById("container");
    //id为list的元素
    var list = document.getElementById("list");
    //获取buttons元素节点下的所有span标签；获取按钮
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");//左箭头
    var next = document.getElementById("next");//右箭头 
    //初始化
    var index = 1;
    var animated = false;
    var timer ;

    //实现小圆点的显示
    function showButton(){
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].className === "on"){
                buttons[i].className = "";
                break;
            }
        }
        buttons[index -1].className = "on";
    }
    
    //实现无缝链接图片
    function animate(number){
        
        animated = true;
        var newleft = parseInt(list.style.left) + number ;
        var time = 300;//位移总时间；
        var interval = 10;//位移间隔；
        var speed = number/(time/interval);//位移量；
        
        //动画平移
        function go(){
            if((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft )){
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go,interval);
            }else{
                animated = false;
                list.style.left = newleft + "px";
                if(newleft > -600){
                    list.style.left = -3000 + "px";
                }
                if(newleft < -3000){
                  list.style.left = -600 + "px";
                }
               

            }
        }
        go();

        
    }

    
    //点击右箭头绑定，实现下一张
    next.onclick = function(){
        if(index === 5){
            index = 1;
        }else{
            index += 1;
        }
        showButton();
        if(!animated){
            animate(-600);
        }
    }
    
    //左箭头，上一张；
    prev.onclick = function(){
        if(index === 1){
            index = 5;
        }else{
            index -= 1;
        }
        showButton();
        if(!animated){
            animate(600);
        }
    }
    
    //图片自动右移函数
    function play(){
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }
    //图片停止右移函数
    function stop(){
        clearInterval(timer);
    }
    
    //实现点击小圆点切换
    for(var i = 0;i < buttons.length; i++){
        buttons[i].onclick = function(){
            if(this.className === "on"){
                return;
            }
            var newIndex = parseInt(this.getAttribute("index"));
            var number = -600 * (newIndex - index);
            index = newIndex;
            animate(number);
            showButton();
        }
    }
    //鼠标放在图片上停止自动移动，离开进行；
    container.onmouseover = stop;
    container.onmouseout = play;
    //初始时为自动
    play();

}

