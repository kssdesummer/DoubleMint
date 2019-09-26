仿写慕课网

学习完jQuery,看完设计原则设计书,仿写了一个慕课网首页

1. 标签的嵌套
2. 确定版心
3. 清空自带的CSS样式
4. 轮播图的嵌套引用,与原生js写轮播图
5. 相同属性的标签样式的复用
6. js的事件使用

小标签

1. outline:none; //设置隐藏input自带的输入边框
2. cursor:pointer; //设置鼠标的样式为小手
3. border-radius:12px; //设置边框圆角
4. z-index: 100; //设置优先级
5. box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.2); //设置边框阴影

js

1. $('.pic0').eq(num); //选择pic0的第num+1个,num索引值
2. $('.pic0').hover(function(){},function(){}); //第一个函数是悬停,第二个是离开
3. $('.pic0').hover(this);获取当前元素的索引值
4. show/hide //显示隐藏
5. fadeIn/fadeOut//淡入浅出



swaper 轮播图组件