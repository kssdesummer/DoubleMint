### React 阶段总结

1.  react 的核心思想：

    *   组件化思想

    *   生命周期

2.  安装使用React

    *   安装： `npm install -g create-react-app`	使用全局命令安装

    *   创建项目： `create-react-app myapp`      创建名为myapp的项目

    *   运行： `npm start `   进入myapp文件夹后执行

3.  文件结构

    *   src ：主要操作目录，所有写的文件都在这里进行
    *   public ：当所有操作完成之后，会将渲染的东西加载到这里
    *   node_modules ：创建项目的时候自动加载的node包 

4.  模块热替换（实时更新）

    ````react
    //在项目入口处添加到最后，一般为src/index.js
    if (module.hot) {
    	module.hot.accept();
    }
    ````

5.  导入包的两种方式

    ```react
    import react from "react";		//适用于导入单个的包，简洁
    import {Component，} from "react";	//适用于导入多个包或函数或变量，方便
    ```

6.  导出包的两种方式

    ```react
    export defalt firstLine；
    export {firstLine，secondLine};
    ```

7.  声明变量的两种方式

    *   const ： 不可变，但是数据或对象里持有的内容可以被更新
    *   let ： 声明的变量是可变的

8.  实例化一个组件

    ```react
    class Test extends Conponent{
    	constructor(props){
    		suoer(props);
    		this.state={
    		}
    	}
    	
    	render(){
            return(
    			<div className="name"></div>
            )
    	}
    } 
    
    export default Test;
    ```

    *   render()方法包含所有返回的元素，元素是组件的构成部分，即是渲染到页面上的组件
    *   组件 ：将相同的网页的重复的部分写成一个组件，将组件复用渲染到页面上
    *   实例 ：
        *   mounting阶段就是component被render解析生成对应的DOM节点，并被插入浏览器的DOM结构的一个过程（组件从无到有的过程）。
            
          *   (注：getDefaultProps()，getDefaultState()是react ES5版本的，在reactES6版本中已经被废弃，不建议使用，是用于初始化定义state，props的默认值)
      *   . componentWillMount
                该方法在首次渲染（render方法）之前调用，在这一阶段组件还未开始实例化
                项目应用：用于做一些组件初始化前需要调用的数据处理，也可以在这一阶段触发loading事件。
      * . componentDidMount
                  这个方法在首次渲染（
      *   render方法）之后调用，在这一阶段组件已经实例化完成

9.  map 函数遍历

    父组件：

    ```react
        render() {
            return (
                <div>
                    {data.map(item=>
                        <RePart item={item}/>	//将遍历得到的数据参数子组件
                    )}
                </div>
            );
        }
    ```

    子组件：

    ```react
        render() {
            let {item} = this.props;	// 接收父组件传入的参数
            return (	// 渲染到html页面
                <div className={item.bf === 'fff'?"bgfff":"bg000"}>
                    <div className={"container-types"+item.name}>
                        <Title data={item}/>	//调用Title组件
                        <div className="types-content clearfix">
                            <div className="container-fluid">
                                {item.cardData?<Two data={item}/>:""}    //调用Two组件
                                {item.cardData1?<FirstLine data={item}/>:""}    //调用FirstLine组件
                                {item.cardData2? <SecondLine data={item}/> :""}    //调用SecondLine组件
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    ```

10.  filter函数

11.  refs

12.  state

     