
$(function () {
    initpage();
    //当调整浏览器窗口大小时，发生 resize 事件
    $(window).resize(function () {
        initpage();
    });

    function initpage() {
        //获取某个元素相对于视窗的宽度
        let view_width = $('html')[0].getBoundingClientRect().width;
        let _html = $('html')[0];
        _html.style.fontSize = view_width / 10 + 'px';
        console.log(view_width);
        console.log(_html.style.fontSize);
    }

});