import React, { Component } from 'react';
import image from "../../Img/new.png";
import {left_content} from './LeftNavData';

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state={
        };
    }

    // 遍历left内容
    parse = item=>
            <li key={item.id} className="item">
                <a href={item.url}>
                {item.name}
                {
                    item.isHot &&
                    <img className="icn-new" src={image} />
                }
                </a>
            </li>
            ;

    render() {
        return (
            // Left Nav
            <div className="sort1">
                <ul className="list1">
                    {left_content.map(this.parse)}
                </ul>

            </div>
        );
    }
}

export {
    LeftNav
}