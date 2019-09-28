import React, { Component } from 'react';
import './Footer.css';
import {list,way} from './Footer_data'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            isHover : false,
        }
    }
    // 页脚左边部分遍历左边的
    left_parse = item =>{
        return(
            <a>{item}</a>
        )
    };
    // 页脚右边的遍历
    right_parse = item =>{
        return(
            <div className={item.class}>
                <a title={item.title} className={item.footerClass}

                />
                <i className={item.iClass}/>
                <p>{item.content}</p>
            </div>
        )
    };

    onMouseEnter = ()=>{
        console.log(this.isHover);
        this.setState({
            isHover:true,
            })
    };
    onMouseLeave =() =>{
        this.setState({
            isHover:false,
        })
    };


    render() {
        return(
            <div className="foot">
                <div className="containe">
                    {/*left footer*/}
                    <div className="f-link">
                        { list.map(this.left_parse)}
                    </div>
                    {/*right footer*/}
                    <div className="f-contact">
                        <div className="qq-wechat">
                            { way.map(this.right_parse)}
                        </div>
                    </div>
                    <div className="f-remark">
                        <p> <img src="https://www.imooc.com/static/moco/v1.0/images/face/36x36/a9.png" />
                            &nbsp;2019&nbsp;imooc.com&nbsp;&nbsp;京ICP备&nbsp;12003892号-11&nbsp;北京奥鹏文化传媒有限公司</p>
                    </div>
                </div>

            </div>
        )
    }
}


export {Footer};