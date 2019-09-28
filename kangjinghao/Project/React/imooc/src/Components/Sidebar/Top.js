import React, { Component } from 'react';

class Top extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
    }

    // 挂载监听高度
    componentDidMount() {
        window.addEventListener('scroll',()=>{
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 900){
                this.setState({
                    show:true,
                })
            }else {
                this.setState({
                    show:false,
                })
            }

        })
    }

    // 点击返回顶部效果
    onClick = () =>{
        let scrollTop = document.documentElement.scrollTop/10;
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset;
            if(pos > 0){
                window.scrollTo(0,pos-scrollTop);
            }else{
                window.clearInterval(scrollToTop);
            }
        },30);
        return false;
    };

    render() {
        let {show} =this.state;
        let {item} = this.props;
        return(
            <div>
            {
                show &&
                <a href={item.url} className={item.name}>
                    <i className={item.iName} id={item.id}/>
                    <span  onClick={this.onClick} className="">{item.content}</span>
                </a>
            }
            </div>
        )}
}
export {Top}