import React, { Component } from 'react';
import {data} from "./BannerData";
import slide_1 from "../../../Img/slide_1.jpg";
class BannerPic extends Component{
    constructor(){
        super();
    }
    // 遍历轮播图片
    picParse = item =>{
        return(
            <div className={`carousel-item ${item===slide_1?"active":""}`}>
                <img src={item}/>
            </div>
        )
    };
    // 遍历小圆点
    pointParse = item =>{
        return(
            <li data-target="#demo" data-slide-to={item}  className={item==="0"?"active":""}/>
        )
    };

    render() {
        let picList = data.picList;
        let pointList = data.pointList;
        return(
            <div className="g-banner-box">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/*指示符 */}
                    <ul className="carousel-indicators">
                    {pointList.map(this.pointParse)}
                    </ul>
                    {/*轮播图片*/}
                    <div className="carousel-inner" >
                        {picList.map(this.picParse)}
                    </div>
                    {/*左右切换按钮*/}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"/>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"/>
                    </a>
                </div>
            </div>
        );
    }
}
export { BannerPic }

