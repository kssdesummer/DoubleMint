//导航栏输入框点击事件
//点击改变颜色


function sho() {
    // $(".search-input").focusin(function () {
        $(".searchTags").hide();
        $(".showhide-search").css("background", "rgba(240, 20, 20, 0.4)");
        $(".search-area").css("border-bottom-color", "#F01414").off("hover");
        $(".icon-search").css("color", "#F01414").off("hover");

    // });
}

//放大镜点击事件
$(".icon-search").on("click",function () {
    $("input").focus()

})

//输入框失去焦点
function hid() {
    //$(".search-input").focusout(function () {
        $(".searchTags").show();
        $(".showhide-search").css("background", "transparent");
        $(".icon-search").css("color", "#757a7e")
        $(".search-area").css("border-bottom-color", "#D9DDE1");

   // })
}

//二维码弹窗
$("#app-load").hover(function () {
        $(".app-load-box").attr("style","display:block");
},function () {
        $(".app-load-box").removeAttr("style");
});
//购物车弹窗
$("#shop-cart").hover(function () {
        $("#my-cart").attr("style","display:block");
},function () {
        $("#my-cart").removeAttr("style");
});
//第一个轮播图item弹窗


$("#a").hover(function () {
        $("#aa").attr("style","display:block");

},function () {
        $("#aa").removeAttr("style");
});

$("#aa").hover(function () {
        $("#a > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#aa").attr("style","display:block");
},function () {
        $("#a > a").removeAttr("style");
        $("#aa").removeAttr("style");
});


$("#b").hover(function () {
        $("#bb").attr("style","display:block");

},function () {
        $("#bb").removeAttr("style");
});
$("#bb").hover(function () {
        $("#b > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#bb").attr("style","display:block");
},function () {
        $("#b > a").removeAttr("style");
        $("#bb").removeAttr("style");
});
$("#c").hover(function () {
        $("#cc").attr("style","display:block");

},function () {
        $("#cc").removeAttr("style");
});
$("#cc").hover(function () {
        $("#c > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#cc").attr("style","display:block");
},function () {
        $("#c > a").removeAttr("style");
        $("#cc").removeAttr("style");
});
$("#d").hover(function () {
        $("#dd").attr("style","display:block");

},function () {
        $("#dd").removeAttr("style");
});
$("#dd").hover(function () {
        $("#d > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#dd").attr("style","display:block");
},function () {
        $("#d > a").removeAttr("style");
        $("#dd").removeAttr("style");
});
$("#e").hover(function () {
        $("#ee").attr("style","display:block");

},function () {
        $("#ee").removeAttr("style");
});
$("#ee").hover(function () {
        $("#e > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#ee").attr("style","display:block");
},function () {
        $("#e > a").removeAttr("style");
        $("#ee").removeAttr("style");
});
$("#f").hover(function () {
        $("#ff").attr("style","display:block");

},function () {
        $("#ff").removeAttr("style");
});
$("#ff").hover(function () {
        $("#f > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#ff").attr("style","display:block");
},function () {
        $("#f > a").removeAttr("style");
        $("#ff").removeAttr("style");
});
$("#g").hover(function () {
        $("#gg").attr("style","display:block");

},function () {
        $("#gg").removeAttr("style");
});
$("#gg").hover(function () {
        $("#g > a").css({"color": "#fff","background-color": "rgba(255, 255, 255, 0.3)"});
        $("#gg").attr("style","display:block");
},function () {
        $("#g > a").removeAttr("style");
        $("#gg").removeAttr("style");
});
//猿问瀑布流
let shu = 3;
let l = $(".items").length;
let h = [];
let lef = [];
for(var i =0; i<l; i++){
        if(i < shu){
                $(".items").eq(i).css({
                        "top":0,
                        "left": 390 * i+ "px"
                });
                h.push(($(".items").eq(i).height()+75));
                lef.push($(".items").eq(i).position().left);
        }else {
                let a  = Math.min(...h);
                let index = $.inArray(a,h);

                $(".items").eq(i).css({
                        "top":a+"px",
                        "left": lef[index]
                });

                h[index] += ($(".items").eq(i).height()+75);
        }
}

//小圈圈浮现

$(".other-item").mouseenter(function () {
        $(this).find("div").css({"display":"block"});
});
$(".other-item").mouseleave(function () {

        $(this).find("div").css({"display":"none"});
});
//第一个轮播图

var img = $(".banner-slide");//获取图片
var dian = $(".banner-dots span");//获取圆点
var bk = $(".bk");

var zuo = $(".prev");//左箭头
var you = $(".next");//右箭头
var index = 0;
//重置所有类
//第一个轮播图

$(".click-help div").eq(0).css({"display":"block"})
$(".banner-dots span").eq(0).css({
    "background": "#FFFFFF",
    "border": "1px solid rgba(7, 17, 27, 0.4)"
});
$(".bk").eq(0).css({"display":"block"})

var removeActive = function () {
    for(let i = 0;i<img.length;i++){
            $(".click-help div").eq(i).removeClass().addClass("banner-slide").fadeOut(300,function () {
                $(".click-help div").eq(i).removeClass().addClass("banner-slide").css({"display":"none"})
            });
    }
    for(let i = 0;i<bk.length;i++){
        $(".bk").eq(i).css({"display":"none"})

    }
    for(let i = 0;i<dian.length;i++){
            $(".banner-dots span").eq(i).removeClass().css({
                "background": "rgba(7, 17, 27, 0.8)",
                "border": "1px solid rgba(255, 255, 255, 0.6)"
            });

    }

};
var getindex = function () {
    removeActive();
    $(".click-help div").eq(index).addClass("active").fadeIn(800).css({
        "display":"block",
    });
    $(".bk").eq(index).css({
        "display":"block",
    });
    $(".banner-dots span").eq(index).addClass("active").css({
        "background": "#FFFFFF",
        "border": "1px solid rgba(7, 17, 27, 0.4)"
    });
};

    $(".next").on('click',function () {
        if(index < img.length-1){
            index++;
        }else{
            index = 0;
        }
        getindex();
    })

$(".prev").on('click',function () {
    if(index == 0){
            index = img.length-1;
    }else{
            index--;
    }
    getindex();
})
$(".dian").on("click",function () {
    var t = $(this).index();
    console.log(t);
    removeActive();
    $(".click-help div").eq(t).addClass("active").fadeIn(800).css({
        "display":"block",
    });
    $(".banner-dots span").eq(t).addClass("active").css({
        "background": "#FFFFFF",
        "border": "1px solid rgba(7, 17, 27, 0.4)"
    });
})
//定时器
var time = 0;
var timer = setInterval(function () {
    time++;
    if (time == 20){
        if(index < img.length-1){
            index++;
        }else{
            index = 0;
        }
        getindex();
        time = 0;
    }
},200);
$(".g-banner-box").mouseover(function () {
    clearInterval(timer);
});
$(".g-banner-box").mouseout(function () {
     timer = setInterval(function () {
        time++;
        if (time == 20){
            if(index < img.length-1){
                index++;
            }else{
                index = 0;
            }
            getindex();
            time = 0;
        }
    },200);
});

//置顶
// 监听滚动
$(".elevator-top").css({
    "display":"none"
})
$(window).scroll(function () {
    var offect = $("html,body").scrollTop();
    if(offect >=800){
        $(".elevator-top").show();
    }else{
        $(".elevator-top").hide();

    }
})

//置顶
$(".elevator-top").on("click",function () {
    $("html,body").animate({scrollTop:0}, 400);
})
