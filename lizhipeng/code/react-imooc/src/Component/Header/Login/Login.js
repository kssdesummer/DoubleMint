import React, {Component} from 'react'
import Download from './Download'
import Shop from './Shop'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            shopShow:false,
        }
    }
    onMouseEnter = () => {
        this.setState(
            {show:true}
        )
    }
    onMouseLeave = () =>{
        this.setState(
            {show:false}
        )
    }

    onMouseEnterShop = () => {
        this.setState(
            {shopShow:true}
        )
    }
    onMouseLeaveShop = () =>{
        this.setState(
            {shopShow:false}
        )
    }

    render(){
        return(
            <div id="login-area">
            <ul className="header-unlogin clearfix">
                <Download 
                    onMouseEnter = {this.onMouseEnter}
                    onMouseLeave = {this.onMouseLeave}
                    show = {this.state.show}
                />                
                <Shop 
                    onMouseEnterShop = {this.onMouseEnterShop}
                    onMouseLeaveShop = {this.onMouseLeaveShop}
                    shopShow = {this.state.shopShow}
                />
                <li className="header-signin">
                    <a href="https://www.imooc.com/" id="signin-btn">登录</a>
                     / 
                    <a href="https://www.imooc.com/" id="register-btn">注册</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default Login