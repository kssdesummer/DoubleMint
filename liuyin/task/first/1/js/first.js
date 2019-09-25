window.onload=function(){
    var div3_ul=document.getElementById("div3_ul");
    var  imag=document.getElementById("imag");
    var parent=document.getElementById("div1");
    var buttons=document.getElementById("div4");
    var cLis =div3_ul.children;

    var len=imag.children.length;
    var width=parent.offsetWidth;
    var rate = 50;                        //一张图片的切换速度，单位为px
    var gap = 2000;                       //自动切换间隙，单位为毫秒
    var timer = null;                     //初始化一个定时器
    var picN = 0;                         //当前显示的图片下标
    var cirN = 0;                         //当前显示图片的小圆点下标
    var now;
    var then = Date.now();

//将第一个li克隆到末尾实现循环
    imag.appendChild(imag.children[0].cloneNode(true));

//创建圆点
    for(var i=0;i<len;i++){
        var a_li=document.createElement("li");
        a_li.className='quiet';
        div3_ul.appendChild(a_li);
    }
    div3_ul.children[0].className='active';

//循环
    function autoRoll(){
        now = Date.now();
        var t = now - then;
        if(t >= gap){   
            if(Roll(-(picN+1)*width)){
                picN++;
                cirN++;
                then = Date.now();
            }
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN == len){
                cirN = 0;
            }
            cLis[cirN].className = "active";
            if(picN>=len){
                imag.style.left = 0;
                picN = 0;
            }
        }
        timer = requestAnimationFrame(autoRoll); 
    }
    autoRoll();

    function Roll(distance){   
        var speed = imag.offsetLeft < distance ? rate:(0-rate);
            imag.style.left = imag.offsetLeft + speed + "px";
            var leave = distance - imag.offsetLeft;
            if(Math.abs(leave)<=Math.abs(speed)){
                imag.style.left = distance+"px";
                return 1;                             //切换完一张图片
            }
        return 0;
    }

//鼠标放上，停止播放
    parent.onmouseover = function(){
        cancelAnimationFrame(timer);
    }
    parent.onmouseout = function(){
        timer = requestAnimationFrame(autoRoll);
    }


//点击圆点进行切换
    for(var i=0; i<len; i++){
        cLis[i].index = i;
        cLis[i].onclick = function(){
            var rollN = this.index;
            for(var j=0; j<len; j++){
                cLis[j].className = "quiet";
            }
            this.className = "active";
            picN = cirN = this.index;
            function rollTo(){
                    imag.style.left=-rollN*width;
                    cancelAnimationFrame(imag.timer);
            }
            rollTo();
        }
    }

    /*上一张*/
    buttons.children[0].onclick = previous;
    /*下一张*/
    buttons.children[1].onclick = next;

    function next(){
        cancelAnimationFrame(imag.timer);
        if(Roll(-(picN+1)*width)){
            cancelAnimationFrame(imag.timer);
            picN++;
            cirN++;
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN == len){
                cirN = 0;
            }
            cLis[cirN].className = "active";
            if(picN>=len){
                imag.style.left = 0;
                picN = 0;
            }
            return;
        }
        imag.timer = requestAnimationFrame(next);
    }

    function previous(){
        if(picN<=0){
            imag.style.left = -len*width + "px";
            picN = len;
        }
        cancelAnimationFrame(imag.timer);
        if(Roll(-(picN-1)*width)){
            cancelAnimationFrame(imag.timer);
            picN--;
            cirN--;
            for(var i=0; i<len; i++){
                cLis[i].className = "quiet";
            }
            if(cirN < 0){
                cirN = len-1;
            }
            cLis[cirN].className = "active";
            return;
        }
        imag.timer = requestAnimationFrame(previous);
    }

}