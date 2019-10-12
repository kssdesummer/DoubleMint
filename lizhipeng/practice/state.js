constructor (props) {
    super(props)

    //初始化状态
    this.state = {
        isLikeMe: false
    }

    //将新增方法中的this强制u绑定为组件对象
    this.handleClick = this.handleClick.bind(this)
}
// 新添加组件方法：内部的this默认不是组件对象，而是undefinded
handleClick () {
    console.log("handleClick()", this)
// 得到状态取反
    const isLikeMe = !this.state.isLikeMe
//更新状态
    this.setState({isLikeMe })
}
// 重写主件类的方法
render () {
    //读取状态
    const {isLikeMe} = this.state
    return <h2 onClick = {this.handleClick}>{isLikeMe?"你喜欢我i":"我喜欢你"}</h2>
}