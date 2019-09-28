import React, { Component } from 'react';
import {Menu} from "./Menu/Menu";
import {BannerBox} from "./BannerBox/BannerBox";

class HeadBanner extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className="g-banner pr">
                {/*侧边栏*/}
                <Menu />
                {/*顶部轮播图*/}
                <BannerBox />
            </div>
        );
    }
}
export { HeadBanner }
