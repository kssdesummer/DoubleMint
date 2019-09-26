import React, { Component } from 'react';
import './Scroll.css';

class Scroll extends Component {
    constructor(props){
        super(props);
        this.state = {
            scroll:'hide',
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=(event)=> {
        //滚动条高度
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 500) {
            this.setState({scroll:'show'})
        } else {
            this.setState({scroll:'hide'})
        }
    };
    top = () => {
        let scrollTop = document.documentElement.scrollTop/20;
        let interval = setInterval(()=>{
            let scrollTop_now = document.documentElement.scrollTop;
            window.scrollTo(0,scrollTop_now - scrollTop);
            if(scrollTop_now <= 0){
                clearInterval(interval);
            }
        },10)
    };
    render(){
        let {scroll} = this.state;
        return (
            <span className={`Scroll ${scroll}`}
                  onClick={this.top}>回到顶部</span>
        );
    }
}

export default Scroll;
