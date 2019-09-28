import React, { Component } from 'react';
import "./Sidebar.css";
import {infoData,topInfo} from "./SidebarData"
import {Info} from "./Info";
import {Top} from "./Top";

class Sidebar extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div id="gotop1" className="elevator">
                {infoData.map(item=>{
                    return(
                        <Info item={item}/>
                    )
                })
                }
                {topInfo.map(item=>{
                    return(
                        <Top item={item}/>
                    )
                })
                }
            </div>
        );
    }
}
export { Sidebar };