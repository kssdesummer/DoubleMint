import React, {Component} from 'react';
import LunboData from'./Data'

class Lunbo extends Component{
    render() {
        return(
            <div className="g-banner-content">
                <div className="g-banner-box">
                    {LunboData.map(src => 
                        <a href="https://www.imooc.com/" className="click-help ">
                            <div className="banner-slide">
                                <img src={src.img} alt = ''/>
                            </div>
                        </a>
                    )}

                    <div className="banner-dots">
                        {
                            LunboData.map(() =>
                                <span className="tab"></span>
                            )
                        }
                    </div>
                    <a href="javascript:" className="banner-anchor prev icon-left2"></a>
                    <a href="javascript:" className="banner-anchor next icon-right2"></a>
                </div>
            </div>
        )
    }
}
export default Lunbo