import React, { Component } from 'react';
import {data} from "./MenuData";
import {Show} from "./Show/Show";
import {Hidden} from "./Hidden/Hidden";


class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHover:0
        }
    }
    // 鼠标悬停效果
    onMouseEnter = (num) => {
        this.setState({isHover:num,})
    };
    onMouseLeave = () => {
        this.setState({isHover:0,})
    };

    render() {
        let {isHover} = this.state;
        let onMouseEnter = this.onMouseEnter;
        let onMouseLeave = this.onMouseLeave;
        return(
            // 轮播图菜单栏
            <div onMouseLeave={onMouseLeave}>
                {/*显示菜单栏*/}
                <div className="menuContent">
                    {data.map(item=>
                        <Show item={item} isHover={isHover} onMouseEnter={onMouseEnter}/>
                    )}
                </div>
                {/*隐藏部分*/}
                <div className='hidden'>
                    {/*判断侧边栏的isHover值，与隐藏部分的id是否相等，相等渲染，不相等不渲染*/}
                    {data.map(item=>
                        <Hidden item={item} isHover={isHover}/>
                    )}

                </div>
            </div>
        );
    }
}
export { Menu };
