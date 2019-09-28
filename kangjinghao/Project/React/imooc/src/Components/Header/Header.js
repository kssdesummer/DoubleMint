import React, { Component } from 'react';
import './Header.css'
import {Logo} from "./Logo/Logo"
import {LeftNav} from "./LeftNav/LeftNav";
import {Search} from "./Search/Search";
import {Login} from "./Login/Login";

class Header extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div id="header">
                <Logo />
                <LeftNav />
                <Search />
                <Login />
            </div>
        );
    }
}
export { Header }