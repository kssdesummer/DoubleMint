$(function () {
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
});