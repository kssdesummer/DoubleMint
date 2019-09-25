const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const bodyParser=require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());



//log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>User-Name: <input name="name" value="koa"></p>
            <p>mail-address: <input name="password" ></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
        console.log(`signin with name: ${name}, password: ${password}`);
         function mailname(a){  
             var str=password.split('@');
             if('qq.com'==str[1]){
                 var b="深圳市腾讯计算机系统有限公司";
                 return b;
             }else if(str[1]=='163.com'){
                var b="网易公司";
                return b;
             }else if(str[1]=='sina.com'){
                var b="新浪公司";
                return b;
             }else if(str[1]=='139.com'){
                var b="中国移动通信集团有限公司";
                return b;
             }else if(str[1]=='126.com'){
                var b="网易公司";
                return b;
             }else if(a=='yeah.net'){
                var b="网易公司";
                return b;
             }else {
                 var b="邮箱未收录或邮箱地址不存在！"
                 return b;
             }
         }
        ctx.response.body = `<h1>用户名为,：${name}，注册邮箱公司为： ${mailname(password)}  !</h1>`;
});
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');