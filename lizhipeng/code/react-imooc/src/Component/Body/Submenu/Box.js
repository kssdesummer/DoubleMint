import React, {Component} from 'react';
import tagBoxList from './Data'
 
const tagBox = tagBoxList.tag.map((tag) => {
    return(
        <a href={tagBoxList.href}>{tag}</a>
    )
})

class Box extends Component{
    render() {
        return(
            <div class="fe-base-box clearfix">
                <div class="banner-line">
                    <span class="bold mr10 l small-title">{tagBoxList.title}</span>
                </div>
                <div class="tag-box l">
                    {tagBox}
                </div>
            </div>
        );
    }
}
export default Box