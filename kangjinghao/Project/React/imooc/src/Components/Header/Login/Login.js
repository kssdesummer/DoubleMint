import React, { Component } from 'react';
import {Download} from "./Download";
import {Shopping} from "./Shopping";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            hover1:false,
            hover2:false,
        };

    }
    onMouseEnter1 = () => {
         this.setState({
             hover1:true,
         })
     };
    onMouseLeave1 = () => {
        this.setState({
            hover1:false,
        })
    };
    onMouseEnter2 = () => {
         this.setState({
             hover2:true,
         })
     };
    onMouseLeave2 = () => {
        this.setState({
            hover2:false,
        })
    };
    render() {
        let onMouseEnter1 = this.onMouseEnter1;
        let onMouseLeave1 = this.onMouseLeave1;
        let {hover1} = this.state;
        let onMouseEnter2 = this.onMouseEnter2;
        let onMouseLeave2 = this.onMouseLeave2;
        let {hover2} = this.state;
        return (
            <div className="sort2">
                <ul className="list2">
                    <li className="download" onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                        <a href="#">下载APP
                        </a>
                        <Download hover={hover1}/>
                    </li>
                    <li className="shop-cart" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <a href="#">
                            <span className="icon-cart"/>
                            <span className="shopping">购物车</span>
                            <span className="shopping_icon"/>
                                <Shopping hover={hover2}/>
                        </a>
                    </li>
                    <li className="signin">
                        <a href="#" id="js-login">登录</a>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" id="js-logup">注册</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export {
    Login
}