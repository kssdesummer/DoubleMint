import React, { Component } from "react"

class Download extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onMouseEnter,onMouseLeave,show} = this.props
        return(
            <li className="app-download" onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} >
                <a href="https://www.imooc.com/" >下载APP</a>
                <div className="app-load-box clearfix js-load-box"
                    style={{display:show?'block':'none'}}
                >
                    <div className="mobile-load-box">
                        <h4>慕课网APP - 随时随地学编程</h4>
                        <img src={require('../img/appload.png')} className="l" />
                        <div className="r">
                            <a href="https://www.imooc.com/" className="app-load-btn">
                                <i className="icon-apple"></i>
                                App Store下载
                            </a>
                            <a href="https://www.imooc.com/" className="app-load-btn">
                                <i className="icon-android"></i>
                                Android下载
                            </a>
                            <p>扫描下载慕课网APP</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Download