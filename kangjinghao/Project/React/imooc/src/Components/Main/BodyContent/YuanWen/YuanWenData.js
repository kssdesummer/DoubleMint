import note11 from "../../../Img/note11.png"
import note12 from "../../../Img/note12.png"
const notePic = ['note10','note1','note2','note3','note4','note5','note6','note7','note8','note9', ];
const note = notePic.map(item => require("../../../Img/" + item + ".jpg"));

const topicList = [{
    id:"0",
    header:"热门话题",
    title1:"#【内推第2波】#",
    p1:"打工奋斗7万落京户VS自主创业牧马城市，如何抉择？",
    url1:note[1],
    content:"毕业求职？跳槽加薪？纠结滋润加班还是苦练x年自主创业？速速提问互撩，你在撩的极有可能就是你的Boss！激不激动？惊不惊喜？Offer已在这里！你的简历在哪里？Scott老师邮箱：wolf18387@qq.comJeson老师邮箱：jeson@imoocc.com",
    goKnown:"了解详情",
    remind:"往期回顾",
    title2:"#【获奖名单戳查看更多】#",
    p2:"当我们谈论Java时，我们都谈些什么？",
    url2:note[2],
    title3:"#【内推第1波】#",
    p3:"直击BAT面试机会！行业大佬在线答疑",
    url3:note[3],
    title4:"#【花式填坑】第23期#",
    p4:"运维进化篇：成为Python DevOps工程师有哪些必备条件？",
    url4:note[4],
    topics:'更多往期话题',
},];
const articList = [{
    id:"0",
    header:"手记文章",
    title:"【React学习路线】从零进阶前端核心工程师",
    url1:note[5],
    content:"哈喽，良心推荐小慕又来跟大家分享啦，今天分享的是React~ 面向工资编程，前端核心框架、加薪神器React了解一下！ React毫无疑问是前端界主流的框架，而框架本身就是热点，可以说是前端工程师们能力提升、快速晋升高级开发工程师的必备技能。 还不知道如何入门？ 技术提升遇到瓶颈？ 别担心，下面小慕就跟大家详细聊一下React的学习路线，入门到进阶的秘籍都在这里啦！ 第一阶段：React快速入门 ...",
    scan:"浏览 159",
    recommend:"推荐 99",
    detail:"阅读全文",
},{
    id:"1",
    header:"手记文章",
    title:"【干货合辑】都2019年下半年了， 抓紧上车 ，今年新热技术都在这里！",
    url1:note[6],
    content:"互联网发展迅速，不进步就等于在落后，2019年前半年都要过去了，热门新技术你掌握了吗？ 还不知道该学什么怎么学？ 别担心，小慕给大家整理了一篇各大方向的新技术学习干货，点赞收藏走起！ 前端方向 热门技术：TypeScript、Vue、微信小程序 干货文章： 《从今天开始，拿起 TypeScript 做一个轮子的制造者》 《TypeScript应该怎么学》 《TypeScript入门》 《TypeS...",
    scan:"浏览 15109",
    recommend:"推荐 966",
    detail:"阅读全文",
},{
    id:"2",
    header:"手记文章",
    title:"【涨薪秘籍】安卓工程师的进阶实战之路",
    url1:note[7],
    content:"Android知识杂乱无章，不知道从哪入手？ 技术更新频繁，学不动了，从业者该何去何从？ 工作多年，年龄上升工资却迟迟不涨，危机感满满，该如何破解？ 是时候该开启你的安卓实战之路啦！涨薪的奥秘都在这里！ 今天小慕给大家带来安卓三个阶段的学习路线，从项目入手，逐步深入的带你理解并掌握Android的核心技术，帮助你成为具备高薪实力的Android开发者，顺利破解职场危机！ 不多说啦，上干货。 第一阶...",
    scan:"浏览 19",
    recommend:"推荐 199",
    detail:"阅读全文",
},{
    id:"3",
    header:"手记文章",
    title:"前端技能点学习路线分享，职场进阶的奥秘都在这里了",
    url1:note[8],
    content:"前端怎样入门？ 这一波良心推荐的【前端学习路线】干货，不谈虚的，直接来谈每个阶段要学习的内容 想入门前端的小伙伴们，那就放马过来吧！     首先，给大家分享一张最新的以 企业岗位需求为导向前端技能点图，如下   根据前端工程师技能点图，我们分为四个阶段： 第一阶段：前端基础 （HTML / CSS / HTML5 / CSS3 / JavaScript ） 干货文章： 初识HTML+CSS 【学...",
    scan:"浏览 1519",
    recommend:"推荐 59",
    detail:"阅读全文",
},{
    id:"4",
    header:"手记文章",
    title:"【面试技巧系列】找工作、涨薪、跳槽都得来一份",
    url1:note[9],
    content:"面试是程序员求职过程中最重要的一步 别以为面试技巧很虚 很多技术不错的人 恰恰输在了面试技巧上 知识点怎么复习、问题如何回答 怎么在面试时避免采坑、惊艳面试官 怎么与HR谈论薪资待遇…… 往往这些问题决定你能否成功应聘。 敲黑板划重点： 以下面试技巧神器你值得拥有！ 大量干货文章袭来预警~ 一、通用篇 干货文章： 聪明人喜欢这样写简历 如何有效地备战面试 【程序员】在面...",
    scan:"浏览 159",
    recommend:"推荐 69",
    detail:"阅读全文",
},{
    id:"5",
    header:"手记文章",
    title:"【干货推荐】java学习进入瓶颈？大牛带你快速攻克！",
    url1:note[0],
    content:"java新手不知如何入门？ 经验多却面临上升瓶颈期？ 想进阶高级工程师还差点火候？ 今天这波最实用的java实战之路 以战养兵 为你打通职业发展脉络 沿着Java大牛们的思路， 逐步成长为一名业务与思想同样优秀的Java开发者。 就业、晋升、管理均游刃有余！ 不多说了，上干货！ 阅读指南：本文专为Java开发行业人员设计，分为四个阶段，循序渐进的带你进行SSM框架、SpringBoot框架、微服务...",
    scan:"浏览 109",
    recommend:"推荐 99",
    detail:"阅读全文",
},];
const faqList = [{
    id:"0",
    header:"相关猿问",
    title:"大大们,问个困扰许久的问题,构造方法的作用到底是什么?",
    answer:"最赞回答",
    content:"构造函数作用是成员变量的初始化。抽象类就是用来继承的，子类实例化时，需要调用父类构造方法来初始化父类中的成员变量，抽象类中也可能有成员变量。所以抽象类中必须支持构造函数。",
    recommend:"共2个回答",
},{
    id:"1",
    header:"相关猿问",
    title:"报了一大片错误，都是在换个红色的，只是文件不一样，我的配置也都对啊，帮忙看下谢谢",
    answer:"最赞回答",
    content:"已经解决，webpack命令拼写错误 ",
    recommend:"共55个回答",
},{
    id:"2",
    header:"相关猿问",
    title:"话说，大家想编程的最初初衷是什么",
    answer:"最赞回答",
    content:"说兴趣的话有没有人打我....",
    recommend:"共8个回答",
},{
    id:"3",
    header:"相关猿问",
    title:"java好学吗.??pp",
    answer:"最赞回答",
    content:"挺好的！",
    recommend:"共588个回答",
},{
    id:"4",
    header:"相关猿问",
    title:"各位猿或者媛，一般几点睡啊。有时忍住头痛看java到很晚，第二天就头痛一整天",
    answer:"最赞回答",
    content:"没有什么事情是需要熬夜完成的",
    recommend:"共588个回答",
},];


const yuanWen = {
    title:["精","／","彩","／","手","／","记","／","及","／","猿","／","问"],
    titIconL:"title-icon icon-shouji-l tit-icon-l",
    titIconR:"title-icon icon-shouji-r tit-icon-r",
};

export {topicList,articList,faqList,yuanWen};

