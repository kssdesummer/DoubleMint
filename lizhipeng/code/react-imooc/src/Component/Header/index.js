import React, {Component} from 'react';
import Logo from './Logo'
import Target from './Target'
import './Header.css'
import Search from './Search';
import Login from './Login/Login'
 

class Header extends Component{
    render() {
        return(
            <div id="header">
                <div className="page-container clearfix" id="nav">
                    <Logo />
                    <Target />
                    <Search/>
                    <Login />
                </div>
            </div>
        );
    }
}
export default Header