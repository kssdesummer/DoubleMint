import React, { Component } from 'react';
import {BannerPic} from "./BannerPic";
import {BannerBottom} from "./BannerBottom";

class BannerBox extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className="g-banner-content">
                {/*轮播图*/}
                <BannerPic />
                {/*轮播图下边信息*/}
                <BannerBottom />
            </div>
        );
    }
}
export { BannerBox }
