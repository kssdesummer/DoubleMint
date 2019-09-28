import React, { Component } from 'react';
import {info} from "./BannerData"

class BannerBottom extends Component{
    constructor(){
        super();
        this.state={
            isHover:0,
        };
    }
    // 悬停事件
    onMouseEnter = (num) => {
        this.setState({
            isHover:num,
        })
    };
    onMouseLeave = () => {
        this.setState({
            isHover:0,
        })
    };

    stateParse = item =>{
        let {isHover} = this.state;
        let onMouseEnter = this.onMouseEnter;
        let onMouseLeave = this.onMouseLeave;
        return(
            <a href="#" className={item.name} id={item.id} onMouseEnter={() => onMouseEnter(item.id)} onMouseLeave={onMouseLeave}
               style={{marginTop:isHover === item.id?'-5px':''}}
            >
                <i className={item.i}/>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
            </a>
        )
    };

    render() {
        return(
            <div className="path-banner">
                {info.map(this.stateParse)}
            </div>
        );
    }
}
export { BannerBottom }
