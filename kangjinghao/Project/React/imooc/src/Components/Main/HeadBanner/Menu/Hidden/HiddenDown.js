import React,{Component} from "react";

class HiddenDown extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let {item} = this.props;
        return (
            <div className="l hiddenDown_part">
                <a href={item.url} title={item.title} className='clearfix'>
                    <img src={item.img_url} className="l" />
                    <div className="l course-card">
                        <h3 className="course-card-name">{item.title}</h3>
                        <div className="course-card-price l">{item.price}</div>
                        <div className="course-card-dot l">
                            <i className="imv2-dot_samll"/>
                        </div>
                        <div className="course-card-info l">{item.grade}</div>
                        <div className="course-card-dot l">
                            <i className="imv2-dot_samll"/>
                        </div>
                        <div className="course-card-info l">
                            <i className="icon-set_sns"/>{item.num}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export {HiddenDown};
