import React, { Component } from 'react';
import "./Main.css";
import {HeadBanner} from "./HeadBanner/HeadBanner";
import {BodyContent} from "./BodyContent/BodyContent";

class Main extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div id="main">
                <div className="bk"/>
                <div className="box-1">
                    {/*导入上部菜单栏和轮播图*/}
                    <HeadBanner />
                </div>
                {/*主体部分*/}
                <BodyContent />
            </div>
        );
    }
}
export { Main };