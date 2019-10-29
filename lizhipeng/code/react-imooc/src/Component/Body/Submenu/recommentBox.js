import React, {Component} from 'react';
 
const submenuList = subList.map((subList) => {
    return(
        <div class="l banner-course-card">
            <a href="https://www.imooc.com/" title="混合开发入门 主流开发方案实战京东移动端APP" class="clearfix">
                <img src="./img/dh/dha1.png" class="l" />
                <div class="l course-card">
                    <h3 class="course-card-name">混合开发入门 主流开发方案实战京东移动端APP</h3>
                    <div class="course-card-price l">￥266.00</div>
                    <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                    <div class="course-card-info l">初级</div>
                    <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                    <div class="course-card-info l"><i class="icon-set_sns">237</i></div>
                </div>
            </a>
        </div>
    )
})

class recommentBox extends Component{
    render() {
        return(
            <div class="recomment-box">
                <div class="l banner-course-card">
                    <a href="https://www.imooc.com/" title="5G时代Vlog原型系统开发" class="clearfix">
                        <img src="./img/dh/dha2.jpg" class="l" />
                        <div class="l course-card">
                            <h3 class="course-card-name">5G时代Vlog原型系统开发</h3>
                            <div class="course-card-info l">入门</div>
                            <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                            <div class="course-card-info l"><i class="icon-set_sns">8128</i></div>
                        </div>
                    </a>
                </div>
                <div class="l banner-course-card">
                    <a href="https://www.imooc.com/" title="微信小程序云开发-从0打造云音乐全栈小程序" class="clearfix">
                        <img src="./img/dh/dha3.png" class="l" />
                        <div class="l course-card">
                            <h3 class="course-card-name">微信小程序云开发-从0打造云音乐全栈小程序</h3>
                            <div class="course-card-price l">￥348.00</div>
                            <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                            <div class="course-card-info l">中级</div>
                            <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                            <div class="course-card-info l"><i class="icon-set_sns">288</i></div>
                        </div>
                    </a>
                </div>
                <div class="l banner-course-card">
                    <a href="https://www.imooc.com/" title="vuex基础入门" class="clearfix">
                        <img src="./img/dh/dha4.jpg" class="l" />
                        <div class="l course-card">
                            <h3 class="course-card-name">vue基础入门</h3>
                            <div class="course-card-info l">入门</div>
                            <div class="course-card-dot l"><i class="imv2-dot_samll"></i></div>
                            <div class="course-card-info l"><i class="icon-set_sns">9653</i></div>
                        </div>
                    </a>
                </div>
            </div>

        );
    }
}
export default recommentBox