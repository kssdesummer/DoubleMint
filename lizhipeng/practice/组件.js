/*
问题：数据保存在哪个组件内？
    看数据是某个组件需要（给他），还是某些组件需要（给共同的父组件）
问题2：需要在子组件中改变父组件的状态
    子组件不能直接改变父组件的状态
    状态在哪个组件，更新状态的行为就应该定义在哪个组件
    解决：父组件定义函数，传递给子组件，子组件调用
组件化编写功能的流程：
    1. 拆分组件
    2. 实现静态组件
    3. 实现动态组件
        1.) 实现初始化数据动态显示
        2.）实现交互功能
*/

class App extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            todos : ['吃饭', '睡觉' ,'打代码']
        }

        this.addTodo = this.addTodo.bind(this)
    }输入

    addTodo(todo) {
        const {todos} = this.state
        todos.unshift(todo)
        //更新状态
        this.setState({todos})
    }

    render() {
        const {todos} = this.state
        return(
            <div>
                <h1>Simple TODO List</h1>
                <Add count = {todos.length} addTodo = {this.addTodo}/>
                <List todos = {this.state.todos}/>
            </div> 
        )
    }
}

class Add extends React.Component{
    constructor (props){
        super(props)

        this.add = this.add.bind(this)
    }

    add () {
        //读取输入的数据
        const todo = this.todoInput.value.tirm();
        //检查合法性
        if(!todo) {
            return
        }
        //添加 
        this.props.addTodo(todo)
        // 清除输入
        this.todoInput.value = ''
    }
    render() {
        return (
            <div>
                <input type = "text" ref = {input = this.todoInput = input}/>
                <button onclick= {this.add}>add #{this.props.count+1}</button>
            </div>
        )
    }
}

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired,
}

class List extends React.Component{
    render() {
        const {todos} = this.props
        return(
            <ul>
                {
                    todos.map((todo, index) => <li key = {index}>{todo}</li>)
                }
            </ul>
        )
    }
}

List .propTypes = {
    todos: propTypes.array.isRequired
}

ReactDOM.render(<App />, doucument.getElementById('example') )
