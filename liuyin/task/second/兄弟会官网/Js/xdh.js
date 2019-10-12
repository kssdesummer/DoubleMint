window.onload=function(){
    // ---------------轮播图--------------------
    var  ul_img=document.getElementById("ul_img");
    var parent=document.getElementById("banner_img");
    var div3_ul=document.getElementById("div3_ul");
    var cLis =div3_ul.children;
    var len=ul_img.children.length;
    var width=parent.offsetWidth;
    var rate = 1400;                        //一张图片的切换速度，单位为px
    var gap = 4000;                       //自动切换间隙，单位为毫秒
    var timer = null;                     //初始化一个定时器
    var picN = 0;                         //当前显示的图片下标
    var cirN = 0;                         //当前显示图片的小圆点下标
    var now;
    var then = Date.now();
    //将第一个li克隆到末尾实现循环
    ul_img.appendChild(ul_img.children[0].cloneNode(true));
    //创建圆点
    for(var i=0;i<len;i++){
        var a_li=document.createElement("li");
        a_li.className='quiet';
        div3_ul.appendChild(a_li);
    }
    div3_ul.children[0].className='active';
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
            ul_img.style.left = 0;
            picN = 0;
        }
    }
    timer = requestAnimationFrame(autoRoll); 
}
autoRoll();

function Roll(distance){   
    var speed = ul_img.offsetLeft < distance ? rate:(0-rate);
        ul_img.style.left = ul_img.offsetLeft + speed + "px";
        var leave = distance - ul_img.offsetLeft;
        if(Math.abs(leave)<=Math.abs(speed)){
            ul_img.style.left = distance+"px";
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
            ul_img.style.left=-rollN*width+"px";
            cancelAnimationFrame(ul_img.timer);
        }
        rollTo();
    }
}
// work
var work_rec=document.getElementById('work_rec');
var b=work_rec.childNodes;
var more_1=document.getElementById('risk_1');
var more_2=document.getElementById('risk_2');
var more_3=document.getElementById('risk_3');
more_1.onmouseover=function(){setDisplay(more_1);}
more_2.onmouseover=function(){setDisplay(more_2);}
more_3.onmouseover=function(){setDisplay(more_3);}
function setDisplay(a){
    var parent=a.parentNode;
    for(var i=0 ;i<b.length-1;i++){
        var s=i%2;
        if(parent==work_rec.children[i+1]){
            work_rec.children[i].style.display='block';
            work_rec.children[i+1].style.display='none';
            i++;
        }else if(s==0){
            work_rec.children[i].style.display='none';
        }else{
            work_rec.children[i].style.display='block';
        }
    }
}   

// IT行业就业/ 职场痛点
var button_left=document.getElementById("button_left");
var button_right=document.getElementById("button_right");
var work_body1=document.getElementById("work_body1");
var work_body2=document.getElementById("work_body2");
button_left.onmouseover=function(){
    work_body2.style.display='none';
    work_body1.style.display='block';
    button_left.style.backgroundImage="url('./images/work/button.png')";
    button_right.style.backgroundImage="url('./images/work/button1.png')";
    button_right.style.color='#82819f';
    button_left.style.color='#fff';
}
button_right.onmouseover=function(){
    work_body1.style.display='none';
    work_body2.style.display='block';
    button_right.style.backgroundImage="url('./images/work/button.png')";
    button_left.style.backgroundImage="url('./images/work/button1.png')";
    button_left.style.color='#82819f';
    button_right.style.color='#fff';
}
//解决人才供需矛盾的破冰者
var right_onclick=document.getElementById("right_onclick");
var gright_onclick=document.getElementById("gright_onclick");
var ice_rdisplay1=document.getElementById("ice_rdisplay1");
var ice_rdisplay2=document.getElementById("ice_rdisplay2");
right_onclick.onmouseover=function(){
    ice_rdisplay2.style.display='none';
    ice_rdisplay1.style.display='block';
    document.getElementById('img1').src="./images/white_row.png";
    document.getElementById('img2').src="./images/black_row.png";
    document.getElementById('dialog_right').style.backgroundColor='#071d50';
    document.getElementById('dialog_gright').style.backgroundColor='#e6e6e6';
    document.getElementById('p20').style.color='#111450';
    document.getElementById('p21').style.color='#111450';
    document.getElementById('p10').style.color='#fff';
    document.getElementById('p11').style.color='#fff';
}
gright_onclick.onmouseover=function(){
    ice_rdisplay1.style.display='none';
    ice_rdisplay2.style.display='block';
    document.getElementById('img2').src="./images/white_row.png";
    document.getElementById('img1').src="./images/black_row.png";
    document.getElementById('dialog_right').style.backgroundColor='#e6e6e6';
    document.getElementById('dialog_gright').style.backgroundColor='#071d50';
    document.getElementById('p10').style.color='#111450';
    document.getElementById('p11').style.color='#111450';
    document.getElementById('p20').style.color='#fff';
    document.getElementById('p21').style.color='#fff';
}
// 培养具备真实交付能力的程序员
var top_onetop1=document.getElementById("top_onetop1");
var top_onetop2=document.getElementById("top_onetop2");
var top_onetop3=document.getElementById("top_onetop3");
var top_onetop4=document.getElementById("top_onetop4");
var top_onetop5=document.getElementById("top_onetop5");
top_onetop1.onmouseover=function(){setOnetop(top_onetop1);}
top_onetop2.onmouseover=function(){setOnetop(top_onetop2);}
top_onetop3.onmouseover=function(){setOnetop(top_onetop3);}
top_onetop4.onmouseover=function(){setOnetop(top_onetop4);}
top_onetop5.onmouseover=function(){setOnetop(top_onetop5);}
function setOnetop(b){
    var par=b.parentNode;
    var nd=document.getElementById("paybody");
    var nds=nd.childNodes;
    for(var i=2;i<nds.length-1;i++){
        if(par==nd.children[i]){
            nd.children[i].children[0].className='top_onetopn';
            nd.children[i].children[2].className='top_onetitlen';
            nd.children[i].children[3].className='top_onetxtn';
        }else{
            nd.children[i].children[0].className='top_onetop';
            nd.children[i].children[2].className='top_onetitle';
            nd.children[i].children[3].className='top_onetxt';
        }
    }
}
//你应该知道的事情
var kleft_one=document.getElementById('kleft_one');
var kleft_two=document.getElementById('kleft_two');
var kleft_three=document.getElementById('kleft_three');
var kleft_four=document.getElementById('kleft_four');
kleft_one.onmouseover=function(){setKnow('kleft_one');}
kleft_two.onmouseover=function(){setKnow('kleft_two');}
kleft_three.onmouseover=function(){setKnow('kleft_three');}
kleft_four.onmouseover=function(){setKnow('kleft_four');}
function setKnow(c){
    var know_left=document.getElementById('know_left');
    for(var i=0;i<4;i++){
        if(know_left.children[i].id==c){
            know_left.children[i].className='kleft_one';
            document.getElementById('know_right').children[i].style.display='block';
        }else{
            know_left.children[i].className='kleft_two';
            document.getElementById('know_right').children[i].style.display='none';
        }

    }
}
}