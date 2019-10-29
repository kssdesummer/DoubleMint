import React, {Component} from 'react';
    
class RecommentBox extends Component{
    render() {
        const recData= this.props.recData
        return(
            recData.map((data) => 
            {
                return(
                    <div class="l banner-course-card">
                        <a href="https://www.imooc.com/" title={data.title} class="clearfix">
                            <img src={data.img} class="l" />
                            <div class="l course-card">
                                <h3 class="course-card-name">{data.title}</h3>
                                <div class="course-card-price l">{data.price}</div>
                                <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                                {data.juger ? 
                                <div>
                                    <div class="course-card-info l">{data.info}</div>
                                    <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                                </div>
                                :''
                                }
                                <div class="course-card-info l"><i class="icon-set_sns">{data.num}</i></div>
                             </div>
                        </a>
                    </div>
                )
            })
        );
    }
}
export default RecommentBox