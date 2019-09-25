var fn_index=async(ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
    <form action="/signin" method="post">
    <p>用户名:<input name="name" value="koa"></p>
    <p>邮箱:<input name="password" ></p>
    <p><input type="submit" value="Submit"></p>
    </form>`;
}

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
        alert(`${name}`);
    // console.log(`signin with name: ${name}, password: ${password}`);
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    };

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};