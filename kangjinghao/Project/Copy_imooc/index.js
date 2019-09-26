$(function () {
    searchColor();
    loadHover();
    shopCart();
    lunbo();
    downHover();
    prepic();
    pointpic();
    AllStar();
    GoTop();
    let timer = setInterval(lunbo2_1, 2000);
    $('.lunbo').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(lunbo2_1, 2000);
    });
});
// 定义一个顶部搜索框颜色效果
function searchColor() {
    var isFocus = false;
    //鼠标悬停效果
    $('.showhide-search').hover(function(){
            if(isFocus){
                $('.showhide-search').css('background-color','rgba(240, 20, 20, 0.2)');
                $('i').css('color','red');
            }else{
                $('.showhide-search').css('background-color','rgba(240, 20, 20, 0.4)');
                $('i').css('color','red');
            }
        },
        function () {
            if(!isFocus){
                $('.showhide-search').css('background-color','white');
                $('i').css('color','#757a7e');
                $('.search-area').css('border-bottom','1px solid #757a7e');
            }
        });
    //鼠标点击
    $('.search').click(function(){
        $('.showhide-search').css('background-color','rgba(240, 20, 20, 0.2)');
        $('i').css('color','red');
        $('.search-area').css('border-bottom','1px solid red');
        $('.search-default').css('display','none');
        $('.search-input').focus();
    });
    //聚焦效果
    $('.search-input').focus(function () {
        $('.showhide-search').css('background-color','rgba(240, 20, 20, 0.2)');
        $('i').css('color','red');
        $('.search-area').css('border-bottom','1px solid red');
        $('.search-default').css('display','none');
        isFocus = true;
    });
    //失去焦点
    $('.search-input').blur(function () {
        $('.search-default').css('display','block');
        $('i').css('color','#757a7e');
        $('.search-area').css('border-bottom','1px solid #757a7e');
        $('.showhide-search').css('background-color','white');
        isFocus = false;
    })
}

// 定义下载APP悬停小窗口
function loadHover() {
    $('.sort2 .download').hover(function () {
        $('.app-load-box').css('display','block');
    },function () {
        $('.app-load-box').css('display','none');
    });
}

//购物车悬停效果
function shopCart() {
    $('.sort2 .shop-cart').hover(function () {
        $('.shop-cart .my-cart').css('display','block');
},function () {
        $('.shop-cart .my-cart').css('display','none');
    })
}

//定义轮播图部分的悬停效果
function lunbo() {
    $('.menuContent #a,.a').hover(function () {
        $('.a').css('display','block');
        $('#a a').css('background-color','rgba(255, 255, 255, 0.3)');
        },
        function () {
            $('.a').css('display','none');
            $('#a a').css('background-color','#2b333b');
    });
    $('.menuContent #b,.b').hover(function () {
            $('.b').css('display','block');
            $('#b a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.b').css('display','none');
            $('#b a').css('background-color','#2b333b');
        });
    $('.menuContent #c,.c').hover(function () {
            $('.c').css('display','block');
            $('#c a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.c').css('display','none');
            $('#c a').css('background-color','#2b333b');
        });
    $('.menuContent #d,.d').hover(function () {
            $('.d').css('display','block');
            $('#d a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.d').css('display','none');
            $('#d a').css('background-color','#2b333b');
        });
    $('.menuContent #e,.e').hover(function () {
            $('.e').css('display','block');
            $('#e a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.e').css('display','none');
            $('#e a').css('background-color','#2b333b');
        });
    $('.menuContent #f,.f').hover(function () {
            $('.f').css('display','block');
            $('#f a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.f').css('display','none');
            $('#f a').css('background-color','#2b333b');
        $('.menuContent #g,.g').hover(function () {
                $('.g').css('display','block');
                $('#g a').css('background-color','rgba(255, 255, 255, 0.3)');},
        function () {
            $('.g').css('display','none');
            $('#g a').css('background-color','#2b333b');
            }
        )}
    );
}

//轮播图下面的浮动效果
function downHover() {
    $('.path-banner .pic-1').hover(function () {
        $('.path-banner .pic-1').css('margin-top','-5px')},
        function () {
            $('.path-banner .pic-1').css('margin-top','0px')
    });
    $('.path-banner .pic-2').hover(function () {
            $('.path-banner .pic-2').css('margin-top','-5px')},
        function () {
            $('.path-banner .pic-2').css('margin-top','0px')
        });
    $('.path-banner .pic-3').hover(function () {
            $('.path-banner .pic-3').css('margin-top','-5px')},
        function () {
            $('.path-banner .pic-3').css('margin-top','0px')
        });
    $('.path-banner .pic-4').hover(function () {
            $('.path-banner .pic-4').css('margin-top','-5px')},
        function () {
            $('.path-banner .pic-4').css('margin-top','0px')
        });
    $('.path-banner .pic-5').hover(function () {
            $('.path-banner .pic-5').css('margin-top','-5px')},
        function () {
            $('.path-banner .pic-5').css('margin-top','0px')
        })
}

//底部轮播图轮播效果
var num=1;
//轮播图左滑
function lunbo2_1(){
    let show = $('.pic0').eq(num);
    let hidden = $('.pic0').eq(1-num);
    show.css('left','-1152px');
    hidden.css('left','0');
    $('.pic0').stop();
    $('.pic0').animate({
        left:"+=1152px",
    },300);
    //判断当前是那张图,小圆点亮色提示
    if(num === 1){
        $('.elite-bg .btn .last-btn').css({'background':'white', 'opacity': '1'});
        $('.elite-bg .btn .first-btn').css({'background':'black', 'opacity': '0.2'});
    }else{
        $('.elite-bg .btn .last-btn').css({'background':'black', 'opacity': '0.2'});
        $('.elite-bg .btn .first-btn ').css({'background':'white', 'opacity': '1'});
    }
    num = 1-num;
}
//轮播图右滑
function lunbo2_2(){
    let show = $('.pic0').eq(num);
    let hidden = $('.pic0').eq(1-num);
    show.css('left','1152px');
    hidden.css('left','0');
    $('.pic0').stop();
    $('.pic0').animate({
        left:"-=1152px",
    },300);
    if(num === 1){
        $('.elite-bg .btn .last-btn').css({'background':'white', 'opacity': '1'});
        $('.elite-bg .btn .first-btn').css({'background':'black', 'opacity': '0.2'});
    }else{
        $('.elite-bg .btn .last-btn').css({'background':'black', 'opacity': '0.2'});
        $('.elite-bg .btn .first-btn ').css({'background':'white', 'opacity': '1'});
    }
    num = 1-num;
}
// 上一张按钮
function prepic() {
    $('.elite-bg .btn .left-btn').click(function () {
        lunbo2_1();
    });
    $('.elite-bg .btn .right-btn').click(function () {
        lunbo2_2();
    });
}
// 下一张按钮
function pointpic() {
    $('.elite-bg .btn .first-btn').click(function () {
        if(num === 1){
            lunbo2_1();
            $('.elite-bg .btn .first-btn').css({'background':'white', 'opacity': '1'});
        }
    });
    $('.elite-bg .btn .last-btn').click(function () {
        if (num===0){
            lunbo2_2();
            $('.elite-bg .btn .last-btn').css({'background':'white', 'opacity': '1'});
        }
    });
}

//底部全明星悬浮效果
function AllStar() {
    $(".star .part2 .student img").hover(function () {
        var len = $(".star .part2 .student img").index(this);
        var tips = $('.star .part2 .student img + .hidden').eq(len);
        tips.show(0.1,function () {
            $(this).css({
                'display': 'block',
            })
        })
        },function () {
        $('.star .part2 .student img + .hidden').fadeOut(400, function () {
            $(this).css({
                'display': 'none',
            })
        })
    })
}

//返回顶部侧边栏
// 图标隐藏显示
$(document).scroll(function() {
    var scroH = $(document).scrollTop();  //滚动高度
    if(scroH >900){  //距离顶部大于900px时
        $('.elevator .gototop').css('display','block')
    }else{
        $('.elevator .gototop').css('display','none')
    }
});
//返回顶部
function GoTop() {
    $('#gotop1').click(function () {
            $("html,body").animate({
                scrollTop: '0'
            }, 300)
    })
    
}


$(function(){
    // var len = $("#demo .carousel-inner img").index();
    // var tips = $('#demo .carousel-inner img').eq(len);
    // console.log(tips.attr("src"));
    // console.log(len);
    $("#demo .carousel-inner .carousel-item").on('show',function (event) {
        console.log(111);
        console.log(event.target.src);
        $('.bk').css({'backgroung':"url("+url1+")"})
    })
    // $('#demo .carousel-inner').change(function () {
    //     var url1 = $('#demo .carousel-inner .active img').attr("src");
    //     console.log(url1);
    // });
    // var url1 = $('#demo .carousel-inner .active img').attr("src");
    // console.log(url1);
    // $('.bk').css({'backgroung':"url("+url1+")"})
});