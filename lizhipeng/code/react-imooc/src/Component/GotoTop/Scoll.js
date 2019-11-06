var top = document.documentElement.scrollTop;
if (top < 1500) {
    $("#backTop").hide();
} else {
    $("#backTop").show();
}
$(window).scroll(function () {
    let top = document.documentElement.scrollTop;
    if (top < 1500) {
        $("#backTop").hide();
    } else {
        $("#backTop").show();
    }
})

$("#backTop").click(function () {
    let time = setInterval(function () {
        let top = document.documentElement.scrollTop;
        console.log(top);
        if (top === 0) clearInterval(time);
        else window.scrollTo(0, top - 50);
    }, 5);
});