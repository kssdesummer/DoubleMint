import React, { Component } from 'react';
import {data, jiangShi} from "./JiangShiData";
import {Title} from "../Tools/Title";

class JiangShi extends Component{
    constructor(props){
        super(props);
        this.state={
            num:0,
            right:false,
            btn:0,
        }
    }

    // 挂载定时器事件
    componentDidMount() {
        this.timer = setInterval(
            ()=>{
                this.setState({
                    num:1-this.state.num,
                    right:false
                })
            },3000
        )
    }
    // 鼠标移入的时候让轮播停止
    onMouseEnter = () =>{
        clearInterval(this.timer);
    };
    // 鼠标移除轮播开始
    onMouseLeave = () =>{
        this.timer = setInterval(
            ()=>{
                this.setState({
                    right:false,
                    num:1-this.state.num
                })
            },3000,
        );
    };

    // 判断向左还是向右滑动，决定不同的轮播类名进行控制
    liParse = (item,index) => {
        let listParse = this.listParse;
            return(
                <div className={index === this.state.num ?this.state.right?"pic0 pic1":"pic0 pic3 ":this.state.right?"pic0 pic2":"pic0 pic4"}>
                    {item.map(listParse)}
                </div>)
    };
    // 遍历两列的内容
    listParse = item =>{
        return(
            <div>{item[0]?"":
                <div className="pic">
                    <img src={item.img_url}/>
                    <span className="name">{item.name}</span>
                    <span className="job">{item.desc}</span>
                    <span
                        className="desc">{item.content}</span>
                </div>}
            </div>
        )
    };
    // 点击左按钮事件
    onClickPre = () =>{
        let {num} = this.state;
        this.setState({
            num:1-num,
            right:true
        })
    };
    // 点击右按钮
    onClickAfter = () =>{
        let {num} = this.state;
        this.setState({
            right:false,
            num:1-num,
        })
    };

    render() {
        let {num} = this.state;
        return(
            <div className="elite-bg">
                <div
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    className="container-types clearfix">
                        <Title data={jiangShi}/>
                    <div className="lunbo container-types">
                    <div className="part1">
                        {data.map(this.liParse)}
                    </div>
                    <div className="btn">
                        {/*底部轮播图按钮*/}
                        <a className="left-btn icon-left2" onClick={this.onClickPre}/>
                        <a className="right-btn icon-right2" onClick={this.onClickAfter}/>
                        <a className="first-btn" style={num===1 ?{background:"#000",opacity:.2}:{background:"#fff",opacity:1}}/>
                        <a className="last-btn" style={num===1 ?{background:"#fff",opacity:1}:{background:"#000",opacity:.2}}/>
                    </div>
            </div>
                </div>
            </div>
        );
    }
}
export { JiangShi };