import React, {Component} from 'react';

const img = ['../img/lunbo/lb1.jpg','../img/lunbo/lb2.jpg','../img/lunbo/lb3.jpg','../img/lunbo/lb4.jpg','../img/lunbo/lb5.jpg','../img/lunbo/lb6.jpg']

class Lunbo extends Component{
    render() {
        return(
            <div class="g-banner-content">
                <div class="g-banner-box">
                    {{img}.map(src => 
                        <a href="https://www.imooc.com/" class="click-help ">
                            <div class="banner-slide">
                                <img src={src}/>
                            </div>
                        </a>
                    )}

                    <div class="banner-dots">
                        {
                            {img}.map(() =>
                                <span class="tab"></span>
                            )
                        }
                        <span class={"tab"}></span>
                    </div>
                    <a href="https://www.imooc.com/" class="banner-anchor prev icon-left2"></a>
                    <a href="https://www.imooc.com/" class="banner-anchor next icon-right2"></a>
                </div>
            </div>
        )
    }
}
export default Lunbo