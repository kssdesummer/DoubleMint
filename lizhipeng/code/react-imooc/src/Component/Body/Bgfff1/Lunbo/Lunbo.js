import React, {Component} from 'react';

const img = [require('../img/lunbo/lb1.jpg'),require('../img/lunbo/lb2.jpg'),require('../img/lunbo/lb3.jpg'),require('../img/lunbo/lb4.jpg'),require('../img/lunbo/lb5.jpg'),require('../img/lunbo/lb6.jpg'),]

class Lunbo extends Component{
    render() {
        return(
            <div className="g-banner-content">
                <div className="g-banner-box">
                    {img.map(src => 
                        <a href="https://www.imooc.com/" className="click-help ">
                            <div className="banner-slide">
                                <img src={src} alt = ''/>
                            </div>
                        </a>
                    )}

                    <div className="banner-dots">
                        {
                            img.map(() =>
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