// 1. 定义组件
function Person (props){
    return(
        <ul>
        <li>姓名: {props.name}</li>
        <li>年龄: {props.age}</li>
        <li>性别: {props.sex}</li>
    </ul>
    )

    
}

class Person extends Component {
    render(){
        return (
        <ul>
            <li>姓名: {props.name}</li>
            <li>年龄: {props.age}</li>
            <li>性别: {props.sex}</li>
        </ul>
        )
    }
}
//  指定属性默认值
Person.defaultProps = {
    sex: "男",
    age: 18,
}

//  指定属性值的类型和必要性
Person.propTypes = {
    name : PropTypes.string.isRequired,
    age: PropTypes.number,
}
// 2. 渲染组件标签

const p1 = {
    name = "Tom",
    age = 18,
    sex = "男"
}

ReactDOM.render(<Person name = {p1.name} age = {p1.age} sex = {p1.sex}/>,document.getElementById('example2'))

const p2 = {
    name = "Jack",
}
ReactDOM.render(<Person />, document.getElementById("example2"))