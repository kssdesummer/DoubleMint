import React,{Component} from "react";
// import {data} from "./MenuData";

class Show extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {isHover,item,onMouseEnter} = this.props;
        return (
            <div className="item" id={item.id}>
                <a href="#"
                   onMouseEnter={() => onMouseEnter(item.id)}
                   style={{background:isHover===item.id?"rgba(255,255,255,0.3)":"",
                   color:isHover===item.id?"white":""
                   }

                   }>
                    <span className="group">{item.menuName}</span>
                    <i className="imv2-arrow1-r"/>
                </a>
            </div>
        )}
}

export {Show};