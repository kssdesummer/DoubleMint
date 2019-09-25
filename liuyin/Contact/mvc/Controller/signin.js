async(ctx,next)=>{
    var 
            email=ctx.request.body.email ||'';
            password=ctx.request.body.password || '';
            if(email==='admin@example.com' && password ==='123456'){
                ctx.render('signin-ok.html',{
                    title:'Sign In OK',
                    name:'Mr Node'
                });
            }else {
                ctx.render('signin-failed.html',{
                    title:'signin in failed'
                });
            }
}