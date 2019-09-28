import React, { Component } from 'react';
import {YuanWen} from "./YuanWen/YuanWen";
import {JiangShi} from "./JiangShi/JiangShi";
import {AllStar} from "./AllStar/AllStar";
import {SHJQX} from "./SHJQX/SHJQX";


class BodyContent extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                {/*实践推荐 新上好课 新手入门 技能提升 前沿技术*/}
                <SHJQX/>
                {/*猿问*/}
                <YuanWen/>
                {/*精英讲师*/}
                <JiangShi/>
                {/*全明星部分*/}
                <AllStar/>
            </div>
        );
    }
}
export { BodyContent };