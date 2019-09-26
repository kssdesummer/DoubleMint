# 前端三大框架

*   Angular.js(最早的)
*   Vue.js（最火的，关注人多）
*   React.js（最流行，用的人较多）

## 组件化：

什么是模块化：是从代码的角度分析，把一些可复用代码，抽离成单个模块，便于羡慕维护和开发

什么是组件化：是从UI界面的角度分析

组件化的好处：随着项目规模增大，组件越来越多，使用方便，拼接完整的网页

React实现：以js来组成，需要熟悉ES6

## 虚拟DOM（Virtual Document Object Model）

 *    DOM：浏览器中的概念，用js对象来表示页面上的元素，并提供操作DOM对象的API

 *    React中的虚拟DOM：是框架中的概念，是程序员 用JS对象来模拟页面上的DOM和DOM嵌套

 *    为什么要使用虚拟DOM：为了实现页面中，DOM元素的高效更新

       *    获取DOM树

             *    ```react
                  //模拟div元素
                  //html
                  <div id='mydiv' title='test' data-index='0'>测试
                  	<p>react</p>
                  </div>
                  
                  //react
                  const div ={
                      tagName:'div', //标签
                      attrs:{					//	属性
                          id:'mydiv',
                          title:'test',
                          'data-index':'0'
                      },childrens:[		//子节点内容
                          '测试',{
                              tagName:'p',
                              attrs:{},
                              childrens:[
                                  'react'
                              ]
                          }
                      ]
                  }
                  
                  //假如只改了测试111，那只需要更改childrens里面的值就行了
                  ```

            	* 通过新旧DOM树的对比，看那些更改

## Diff算法

*   tree diff ：新旧两颗DOM树，==逐层对比==的过程，对比完成找到需要更新的元素
*   component diff ：在进行tree diff时，==组件间对比==，相同的暂时不需要更新，不同的移除旧组件，更新新组件
*   element diff ： 在组件对比的时候，两个组件类型相同，需要元素==对比==

# React简介

* React

  – 使用 create-react-app 创建一个 React 应用
  – JSX 混合使用了 HTML 和 JavaScript 在 React 组件的方法中定义它的输出
  – React 中,组件、示例和元素是不同的概念
  – ReactDOM.render() 是 React 应用连接 DOM 的入口方法
  – JavaScript 内建函数可以在 JSX 中使用

  ​		map遍历， 可以被用来把列表成员渲染成 HTML 的元素

* ES6
  
  * 根据不同的使用场景,选择用 const 和 let 来声明变量
      	– 在 React 应用中尽量使用 const 来声明变量
  *  箭头函数可以用来是你的函数变得更简洁
  * 在 React 中,通过继承类的方式来声明组件



## node 和 npm

使用react需要提前安装node 8.0以上和npm5.0以上

````
查看当前版本
node -v
npm -v
没有则安装：
sudo apt-get install -g nodejs
版本更新：
sudo npm update npm -g
````

## 零配置搭建React应用

确保node和npm没有问题的情况下：

```
npm install -g create-react-app
create-react-app --version
create-react-app myapp
cd myapp/
npm start
```

项目内容：

* README.md: 包含了这个项目的一些基本的指令和介绍。
* node_modules/: 这个文件夹包含了所有通过 npm 安装的 node 包。在你使用了 create-
  react-app 之后,就有一堆 node 包已经被安装了。只需要在命令行用 npm 安装或者卸载 node 包就可以。
* package.json: 这个文件包含了 node 包依赖列表和一些其他的项目配置。
* .gitignore: 这个文件包含了所有不应该添加到 git 仓库(repository)中的文件和文件
  夹。他们应该只能存活在你本地项目文件夹中。一个典型的例子是 node_modules/ ,
  把 package.json 共享给你的伙伴们就足够他们获取和安装所有的依赖了,没必要把整
  个依赖打包共享给他们。
* public/: 这个文件夹包含了所有你的项目构建出的产品文件。最终所有你写在 src/ 文
  件夹里面的代码都会在项目构建的时候被打包放在 public 文件夹下。
*  manifest.json 和 registerServiceWork.js: 在这个阶段不用担心这些文件用来干什么,
  我们不会在这个项目中用到他们。

所有用到的文件都在 src/ 文件夹中。
首要关注的是实现 React 组件的 src/App.js 文件。它主要用于实现你的应用,不过之后你可
能会把你的组件分离到多个文件中,其中每个文件来维护一个或者多个特定的组件。
除 此 之 外, 你 会 发 现 还 有 一 个 用 于 测试 的 src/App.test.js 和 作 为 React 世 界 的 入 口 的
src/index.js。另外,还有控制你项目整体样式和组件样式的 src/index.css 文件和 src/App.css 文件,他们都被设置成了默认的样式。

```
// 在 http://localhost:3000 启动应用
npm start
// 运行所有测试
npm test
// 构建项目的产品文件
npm run build
```

## JSX 简介

React特有的语法：分析src/App.js

```react
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
render() {
return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div>
);
}
}
export default App;

```

render() 方法包含了它所返回的元素(element)。元素是组件的构成部分。理解清楚组件、实例和元素之间的区别是很有帮助的。

## ES6 const 和 let

let 声明的变量是可变的

const声明的变量不可变，但是数据或对象里面持有的内容可以被更新

## ReactDOM

在入口文件src/index.js中使用：

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
	<div>
        <h1>Hello</h1>
        <p>可以放多个节点</p>
    </div>,
	document.getElementById('root')
);
// 将h1渲染到 id 为 root 的节点中
```

ReactDOM.render() 会使用你的 JSX 来替换你的 HTML 中的一个 DOM 节点。这
样你就可以很容易地把 React 集成到每一个其他的应用中。 ReactDOM.render() 可以在你的
应用中被多次使用。

ReactDOM.render() 有两个传入参数。第一个是准备渲染的 JSX。第二个参数指定了 React
应用在你的 HTML 中的放置的位置。这个位置是一个 id='root' 的元素。

## 模块热替换

帮助浏览器喘息加载的应用工具，添加在src/index.js最后

```
if (module.hot) {
module.hot.accept();
}
```

## JSX中的复杂Javascript

渲染列表

src/App.js

***********

```react
import React, { Component } from 'react';
import './App.css';
//声明一个列表
const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
class App extends Component {
    render() {
        var helloWorld = 'Helloworld';
        return (
            <div className="App">
                <h2>{helloWorld}</h2>
               {/*map函数遍历list，并拿到list里面的各种数据*/}
                {list.map(function(item) {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}  </a>
                            </span>
                            <span>{item.author}  </span>
                            <span>{item.num_comments}  </span>
                            <span>{item.points}  </span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default App;
```

## ES6 箭头函数

声明方式
item => { ... }   function(item){...}
(item) => { ... }
(item, key) => { ... }

src/App.jx

```react
{list.map(item => {...})} //简洁不需要return
{list.map(function(item) {
        return (...)
        })}
```

## ES6 类

```react
class Developer {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
	}
    getName() {
        return this.firstname + ' ' + this.lastname;
        }
}
//实例化一个对象：
const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());
```

```react
import React, { Component } from 'react';
	...
class App extends Component {
	render() {
		...
	}
}
```

这个 App 类继承自 Component 。简单来说,你可以声明你的 App 组件,但是这个组件需要
继承自另一个组件。它可以把功能从一个类传递到另一个类。
这个 App 类就从 Component 类中继承了它的功能。这个 Component 类是从一个基本 ES6
类中继承来的 ES6 组件类。它有一个 React 组件所需要的所有功能。渲染(render)方法就
是其中你可以使用的一个功能。之后你可以学到更多其他组件类的方法。
这个 Component 类封装了所有 React 类需要的实现细节。它使得开发者们可以在 React 中使
用类来创建组件。
React Component 类暴露出来的方法都是公共的接口。这些方法中有一个方法必须被重写,
其他的则不一定要被重写。这个 render()方法是必须被重写的方法,因为它定义了一个 React 组件的输出。它必须被定义。

# React 基础

*   React
    – 使用 this.state 和 setState() 来管理你的内部组件状态
    – 将函数或者类方法传递到你的元素处理器
    – 在 React 中使用表单或者事件来添加交互
    – 在 React 中单向数据流是一个非常重要的概念
    – 拥抱 controlled components
    – 通过 children 和可复用组件来组合组件
    – ES6 类组件和函数式无状态组件的使用方法和实现
    – 给你的组件声明样式的方法
*    ES6
    – 绑定到一个类的函数叫作类方法
    – 解构对象和数组
    – 默认参数
*    General
    – 高阶函数

## React 组件内部状态

局部状态,允许你保存、修改和删除存储在组件内部的属性。使
用 ES6 类组件可以在构造函数中初始化组件的状态。构造函数只会在组件初始化时调用一
次。

引入类构造函数

```react
class App extends Component {
    constructor(props) {
    	super(props);
    }
    ...
}
```

当你使用 ES6 编写的组件有一个构造函数时,它需要强制地调用 super(); 方法,因为这个
App 组件是 Component 的子类。因此在你的 APP 组件要声明 extends Component 。

你也可以调用 super(props); ,它会在你的构造函数中设置 this.props 以供在构造函数中
访问它们。否则当在构造函数中访问 this.props ,会得到 undefined 。

## 初始化对象

```
// ES5
var userService = {
getUserName: function (user) {
return user.firstname + ' ' + user.lastname;
},
};
// ES6
const userService = {
getUserName(user) {
return user.firstname + ' ' + user.lastname;
},
};
//计算属性名
const key = 'name';
const user = {
	[key]: 'Robin',
};
```

## 单项数据流

单向数据量组件props是父级往下传递，你不能向上去修改父组件的数据，并且也不能在自身组件中修改props的值。

## 绑定

```react
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list: list,
            list,
        };
        this.onDismiss = this.onDismiss.bind(this);
        }
        onDismiss(id) {...}
       }
```

## 事件处理

## 表单交互

```react
import React, { Component } from 'react';
import './App.css';
//声明一个列表
const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}
// const isSearched = searchTerm => item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list: list,
            list,searchTerm:'',
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        }
    onDismiss(id) {
        // function isNotId(item) {
        //     return item.objectID !== id;
        // }
        // const updatedList = this.state.list.filter(isNotId);
        // const updatedList = this.state.list.filter(item => item.objectID !== id);
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });

    }
    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        var helloWorld = 'Hello world';
        return (
            <div className="App">
                <form>
                    <input type="text" onChange={this.onSearchChange}/>
                </form>
                <h2>{helloWorld}</h2>
                {/*map函数遍历list，并拿到list里面的各种数据*/}
                {/*{list.map(function(item) {*/}
                {/*{this.state.list.map(item => {*/}
                {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>{
                    const onHandleDismiss = () =>
                        this.onDismiss(item.objectID);
                    return (

                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}  </a>
                            </span>
                            <span>{item.author}  </span>
                            <span>{item.num_comments}  </span>
                            <span>{item.points}  </span>
                            <span>
                                <button
                                    onClick={() => this.onDismiss(item.objectID)}
                                    type="button"
                                >
                                    Dismiss
                                </button>
                            </span>
                        </div>
                        )}
                    )
                }
            </div>
        );
    }
}
export default App;
```

## ES6 解构

```react
const users = ['Robin', 'Andrew', 'Dan'];
const [userOne,userTwo,userThree] = users;
console.log(userOne, userTwo, userThree);
// output: Robin Andrew Dan
先初始化对象，然后结构，就直接能使用对象名作为参数使用了
```

## 受控组件

表单元素比如 <input> , <textarea> 和 <select> 会以原生 HTML 的形式保存他
们自己的状态。一旦有人从外部做了一些修改,它们就会修改内部的值,在 React 中这被
称为不受控组件,因为它们自己处理状态。在 React 中,你应该确保这些元素变为受控组
件。

应该设置输入框的值属性,这个值已经在 searchTerm 状态属性中保存了

## 拆分组件

将一个大的组件拆分成若干小组件，可以给组件传递属性并在组件中使用它们。至于 App 组件,它需要传递由本地状态(state) 托管的属性和它自己的类方法。

```react
import React, { Component } from 'react';
import './App.css';
//声明一个列表
const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // list: list,
            list,searchTerm:'',
        };
        // 绑定事件
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        }
    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });

    }
    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const {searchTerm,list}=this.state;
        return (
            <div className="App">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                />
                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

class Search extends Component{
    render() {
        //解构
        const {value,onChange} = this.props;
        return(
            <form>
                <input value={value}
                       type='text'
                       onChange={onChange}
                       />
            </form>
        );
    }
}

class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item =>
                        <div key={item.objectID}>
                            <span>
                            <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                            <span>
                            <button
                                onClick={() => onDismiss(item.objectID)}
                                type="button"
                            >
                                Dismiss
                            </button>
                            </span>
                        </div>
                )}
            </div>
        );
    }
}

export default App;
```



## 可组合组件

在 props 对象中还有一个小小的属性可供使用: children 属性。通过它你可以将元素从上
层传递到你的组件中,这些元素对你的组件来说是未知的,但是却为组件相互组合提供了
可能性。

## 可复用组件

可复用和可组合组件让你能够思考合理的组件分层,它们是 React 视图层的基础。

```react
//定义一个复用组件 button
class Button extends Component {
    render() {
        const {
            onClick,
            className="",
            children,
        } = this.props;
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
                >
                {children}
            </button>
        );
    }
}
```

### React 组件类型

*    ==函数式无状态组件==: 这类组件就是函数,它们接收一个输入并返回一个输出。输入是props,输出就是一个普通的 JSX 组件实例。到这里,它和 ES6 类组件非常的相似。然而,函数式无状态组件是函数(函数式的),并且它们没有本地状态(无状态的)。你不能通过 this.state 或者 this.setState() 来访问或者更新状态,因为这里没有 this对象。此外,它也没有生命周期方法。虽然你还没有学过生命周期方法,但是你已经用到了其中两个: constructor() and render() 。constructor 在一个组件的生命周期中只执行一次,而 render() 方法会在最开始执行一次,并且每次组件更新时都会执行。当你阅读到后面关于生命周期方法的章节时,要记得函数式无状态组件是没有生命周期方法的。
*   ==ES6 类组件==: 在你的四个组件中,你已经使用过这类组件了。在类的定义中,它们继承自 React 组件。 extend 会注册所有的生命周期方法,只要在 React component API 中,都可以在你的组件中使用。通过这种方式你可以使用 render() 类方法。此外,通过使用 this.state 和 this.setState() ,你可以在 ES6 类组件中储存和操控 state。
*    ==React.createClass==: 这类组件声明曾经在老版本的 React 中使用,仍然存在于很多 ES5React 应用中。但是为了支持 JavaScript ES6, Facebook 声明它已经不推荐使用了69。他们还在 React 15.5 中加入了不推荐使用的警告70。你不会在本书使用它。

将Search组件重构成一个函数式无状态组件

```react
function Button (props) {
        const {
            onClick,
            className="",
            children,
        } = props;
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
            >
                {children}
            </button>
        );
}

```

## 给组件声明样式

添加css

# 使用真实的API

*   React
    – 针对不同用例的 ES6 类组件生命周期方法
    – componentDidMount() 如何用于 API 交互
    – 条件渲染
    – 表单上的合成事件
    – 错误处理
*    ES6
    – 用模板字符串去组合字符串
    – 扩展运算符用于不可变数据结构
    – 可计算的属性名称
*   General
    – Hacker News API 交互
    – 浏览器原生 fetch API
    – 客户端和服务器端搜索
    – 数据分页
    – 客户端缓存

## 生命周期方法

这些方法是嵌入 React 组件生命周期中的一组挂钩。它们可以在 ES6 类组件中使用,但是不能在无状态组件中使用。

==constructor(构造函数)==只有在组件实例化并插入到 DOM 中的时候才会被调用。组件实例化的过程称作组件的挂载(mount)。
==render()==方法也会在组件挂载的过程中被调用,同时当组件更新的时候也会被调用。每当组件的状态(state)或者属性(props)改变时,组件的 render() 方法都会被调用。

在组件挂载的过程中还有另外两个生命周期方法:==componentWillMount()== 和 ==componentDid-Mount()== 。

### 调用顺序

在挂载过程中有四个生命周期方法,它们的调用顺序是这样的:

*   constructor()
*   componentWillMount()
*   render()
*   componentDidMount()

组件更新有五个生命周期方法,调用顺序如下:

*   componentWillReceiveProps()
*   shouldComponentUpdate()
*   componentWillUpdate()
*   render()
*   componentDidUpdate()

组件卸载只有一个周期方法：

*   componentWillUn-mount()

### 使用场景

*   constructor(props) - 它在==组件初始化时==被调用。在这个方法中,你可以设置初始化状态以及绑定类方法。
*    componentWillMount() - 它在 render() 方法之前被调用。这就是为什么它可以用作去设置组件内部的状态,因为它不会触发组件的再次渲染。但一般来说,还是推荐在 constructor() 中去初始化状态。
*    render() - 这个生命周期方法是必须有的,它返回作为组件输出的元素。这个方法应该是一个纯函数,因此==不应该在这个方法中修改组件的状态==。它把属性和状态作为输入并且返回(需要渲染的)元素
*    componentDidMount() - 它仅在组件挂载后执行一次。这是发起异步请求去 API 获取数据的绝佳时期。获取到的数据将被保存在内部组件的状态中然后在 render() 生命周期方法中展示出来。
*    componentWillReceiveProps(nextProps) - 这个方法在一个更新生命周(update lifecycle)中被调用。新的属性会作为它的输入。因此你可以利用 this.props 来对比之后的属性和之前的属性,基于对比的结果去实现不同的行为。此外,你可以基于新的属性来设置组件的状态。
*   shouldComponentUpdate(nextProps, nextState) - 每次组件因为状态或者属性更改而更新时,它都会被调用。你将在成熟的 React 应用中使用它来进行性能优化。在一个更新生命周期中,组件及其子组件将根据该方法返回的布尔值来决定是否重新渲染。这样你可以阻止组件的渲染生命周期(render lifecycle)方法,避免不必要的渲染。
*   componentWillUpdate(nextProps, nextState) - 这个方法是 render() 执行之前的最后一 个 方 法。 你 已 经 拥 有 下 一 个 属 性 和 状 态, 它 们 可 以 在 这 个 方 法 中 任 由 你 处置。你可以利用这个方法在渲染之前进行最后的准备。注意在这个生命周期方法 中 你 不 能 再 触 发 setState() 。如 果 你 想 基 于 新 的 属 性 计 算 状 态, 你 必 须 利 用componentWillReceiveProps() 。
*    componentDidUpdate(prevProps, prevState) - 这个方法在 render() 之后立即调用。你可以用它当成操作 DOM 或者执行更多异步请求的机会。
*   componentWillUnmount() - 它会在组件销毁之前被调用。你可以利用这个生命周期方法去执行任何清理任务。

*   componentDidCatch(error, info)：它在 React 16 中引入,用来捕获组件的错误。举例来说,在你的应用中展示样本数据本来是没问题的。但是可能会有列表的本地状态被意外设置成 null 的情况发生(例如从外部 API 获取列表失败时,你把本地状态设置为空了)。然后它就不能像之前一样去过滤(filter)和映射(map)这个列表,因为它不是一个空列表( [] )而是 null 。这时组件就会崩溃,然后整个应用就会挂掉。现在你可以用 componentDidCatch() 来捕获错误,将它存在本地的状态中,然后像用户展示一条信息,说明应用发生了错误。

constructor() 和 render() 生命周期方法是常用的生命周期方法。实际上 ==render() 是必须有的==,否则它将不会返回一个组件实例。

## 获取数据

使用componentDidMount（）生命周期方法获取数据



# 高级React组件

*   React
    – 通过 ref 属性引用 DOM 节点
    – 高阶组件是构建高级组件的常用方法
    – 高级交互在 React 中的实现
    – 帮助实现条件 classNames 的一个优雅库
*    ES6
    – rest 解构拆分对象和数组

## 引入DOM元素

ref 属性可以让我们访问元素中的一个节点，遵循它的声明式编程和单向数据流。

*    使用 DOM API(focus 事件,媒体播放等)
     调用命令式 DOM 节点动画
     与需要 DOM 节点的第三方库集成



## 高阶组件（HOC）

HOC 与高阶函数是等价的。它接受任何输入 - 多数时候是一个组件,也可以是可选参数 - 并返回一个组件作为输出。惯例是用“with”前缀来命名 HOC。

```react
function withFoo(Component) {
    return function(props) {
    	return <Component { ...props } />;
    }
}
```



## 高阶排序

安装工具：npm install loadsh

```react
import { sortBy }from 'loadsh';
const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};
```



# React 状态管理与进阶

## 状态提取

将子状态(substate)从一个组件移动到其他组件中的重构过程被称为状态提取。

状态提取的过程也可以反过来:从子组件到父组件,这种情形被称为状态提升。

## 再探：setState()

```react
//传入对象
this.setState({ foo: bar });
// 传入函数
this.setState((prevState, props) => {
    const { fooCount } = prevState;
    const { barCount } = props;
    return { count: fooCount + barCount };
});
```



```react
<div className={`carousel-item ${item===slide_1?"active":""}`}>
</div>
等同于
className={item===slide_1?"carousel-item active":"carousel-item"}
```



```react

    constructor(props) {
        super(props);
        this.state={
            isHover:0,
        };
    }
    onMouseEnter = (num) => {
         this.setState({
             isHover:num,
         })
     };
    onMouseLeave = () => {
        this.setState({
            isHover:0,
        })
    };
render() {
        let onMouseEnter = this.onMouseEnter;
        let onMouseLeave = this.onMouseLeave;
        let {isHover} = this.state;
        return (
            {/*获取当前的id值传入onMouseEnter，也就是num，然后拿num值与item.id比较，让它改变*/}
			<div className="name"  onMouseEnter={()=>onMouseEnter(item.id)} onMouseLeave={onMouseLeave} ></div>
            <a style={{display:isHover===item.id?'block':'none'}}></a>
```























