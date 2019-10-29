import React, {Component} from 'react';
 

class Box extends Component{
    render() {
        const boxData = this.props.boxData;
        console.log(boxData)
        console.log(boxData.href);
        console.log(boxData.tag[0])
        const tagBox = (boxData.tag).map((tag) => {
            return(
                <a href={boxData.href}>{tag}</a>
            )
        })
        return(
            <div class="fe-base-box clearfix">
                <div class="banner-line">
                    <span class="bold mr10 l small-title">{boxData.title}</span>
                </div>
                <div class="tag-box l">
                    {tagBox}
                </div>
            </div>
        );
    }
}
export default Box