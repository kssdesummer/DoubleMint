$(function (){
    $(".red").hover(()=>{
        $(".red").css({'background-color': 'red'});
        $(".hidden.stop").css({'display':'block'})
    },()=>{
        $(".red").css({'background-color': ''});
        $(".hidden.stop").css({'display':'none'})
    });
    $(".yellow").hover(()=>{
        $(".yellow").css({'background-color': 'yellow'});
        $(".hidden.wait").css({'display':'block'})
    },()=>{
        $(".yellow").css({'background-color': ''});
        $(".hidden.wait").css({'display':'none'})
    });
    $(".green").hover(()=>{
        $(".green").css({'background-color': 'green'});
        $(".hidden.move").css({'display':'block'})
    },()=>{
        $(".green").css({'background-color': ''});
        $(".hidden.move").css({'display':'none'})
    });
    $(".start").click(()=>{
        console.log();
        $('.green').css({'background-color':'green'});
        function changeColor(){
            setTimeout(() => {
                $('.green').css({'background-color':'green'});
                $('.red').css('background-color', '');
                $('.yellow').css('background-color', '');
                setTimeout(() => {
                    $('.yellow').css('background-color', 'yellow');
                    $('.red').css('background-color', '');
                    $('.green').css('background-color', '');
                    setTimeout(() => {
                        $('.red').css('background-color', 'red');
                        $('.green').css('background-color', '');
                        $('.yellow').css('background-color', '');
                        setTimeout(
                            changeColor(), 3000
                        )
                    }, 2000)
                }, 4000)
            }, 6000)
        }
        changeColor()
    });
    const num = 1;
    $(".stop").click((num)=>{
        num = 0;
        console.log(num);
    });




});




