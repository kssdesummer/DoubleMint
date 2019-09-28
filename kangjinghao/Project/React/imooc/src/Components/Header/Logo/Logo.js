import React, { Component } from 'react';
import logo_image from "../../Img/logo.png"

// const logo_image = 'https://www.imooc.com/static/img/index/logo.png';

class Logo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*logo*/}
                <div id = 'logo'>
                    <img src={logo_image} alt="图片加载错误" title="慕课网" />
                </div>
            </div>
        );
    }
}

export {
    Logo
}