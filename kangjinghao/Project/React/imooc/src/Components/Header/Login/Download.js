import React, { Component } from 'react';
import img from "../../Img/appload.png";
// import {hover} from "./Login"


class Download extends Component {

    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        // 接受传入的参数用this.props
        const {hover} = this.props;
        return (
            <div className="app-load-box clearfix js-load-box" style={{display:hover?'block':'none'}}>
                <div className="mobile-load-box">
                    <h4>慕课网APP - 随时随地学编程</h4>
                    <img src={img} className="l" />
                        <div className="r">
                            <a className="app-load-btn" href="#" target="_blank">
                                <i className="icon-apple"></i>
                                App Store下载
                            </a>
                            <a className="app-load-btn" href="#" target="_blank">
                                <i className="icon-android"></i>
                                Android下载
                            </a>
                            <p>扫描下载慕课网APP</p>
                        </div>
                </div>
            </div>
        );
    }
}

export {
    Download
}