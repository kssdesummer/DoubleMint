import React, { Component } from 'react';
import {starList,stuList,allStar} from "./AllStarData";
import {Title} from "../Tools/Title";
import {Fade} from "./Fade";

// import "./AllStar.css"
class AllStar extends Component{
    constructor(){
        super();
        this.state={
            hover:0,
            id:0,
        };
    }


    // 遍历全明星上面部分
    starParse = item =>{
        return(
            <div className="person" key={item.id}>
                <img src= {item.src}/>
                <span className={item.color}/>
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
            </div>
        )
    };
    // 遍历全明星下面的大神


    render() {
        return(
            <div className="bgfff">
                <div className="container-types clearfix">
                    <Title data={allStar}/>
                    <div className="star">
                        <div className="part1">
                            {starList.map(this.starParse)}
                        </div>
                        <div className="part2">
                            {stuList.map(item =>
                                <Fade item={item}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { AllStar };