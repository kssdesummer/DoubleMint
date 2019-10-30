import React, {Component} from 'react';
    
class RecommentBox extends Component{
    render() {
        const recData= this.props.recData
        return(
            recData.map((data) => 
            { 
                return(
                    <div className="l banner-course-card">
                        <a href="https://www.imooc.com/" title={data.title} className="clearfix">
                            <img src={data.img} alt = '' className="l" />
                            <div className="l course-card">
                                <h3 className="course-card-name">{data.title}</h3>
                                {data.juger ? 
                                <div>
                                    <div className="course-card-price l">{data.price}</div>
                                    <div className="course-card-dot l"><i className="imv2-dot_samll"></i></div>
                                </div>
                                :''
                                }
                                <div className="course-card-info l">{data.info}</div>
                                <div className="course-card-dot l"><i className="imv2-dot_samll"></i></div>
                                <div className="course-card-info l"><i className="icon-set_sns">{data.num}</i></div>
                             </div>
                        </a>
                    </div>
                )               
            })
        );
    }
}
export default RecommentBox