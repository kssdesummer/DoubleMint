import React, {Component} from 'react';

class Box extends Component{
    render() {
        const boxData = this.props.boxData;
        return(
            (boxData).map((data) => {
                return(
                    <div className="fe-base-box clearfix">
                        <div className="banner-line">
                            <span className="bold mr10 l small-title">{data.title}</span>
                        </div>
                        <div className="tag-box l">
                            {                    
                                (data.tag).map(tag =>
                                    <a href={data.href}>{tag}</a>
                                )
                            }
                        </div>
                    </div>
                )
            })
        );
    }
}
export default Box