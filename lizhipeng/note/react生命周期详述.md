react生命周期详述
1)
组件的三个生命周期状态:

* Mount:插入真实 DOM
* Update:被重新渲染
* Unmount:被移出真实 DOM
2)
React 为每个状态都提供了勾子(hook)函数
* componentWillMount()
* componentDidMount()
* componentWillUpdate()
* componentDidUpdate()
* componentWillUnmount()
3) 生命周期流程:
a.
第一次初始化渲染显示: ReactDOM.render()
* constructor(): 创建对象初始化 state
* componentWillMount() : 将要插入回调
* render() : 用于插入虚拟 DOM 回调
* componentDidMount() : 已经插入回调
b.
每次更新 state: this.setSate()
* componentWillUpdate() : 将要更新回调
* render() : 更新(重新渲染)
* componentDidUpdate() : 已经更新回调
c.
移除组件: ReactDOM.unmountComponentAtNode(containerDom)
* componentWillUnmount() : 组件将要被移除回调