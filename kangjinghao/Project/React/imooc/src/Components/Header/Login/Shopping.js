import React, { Component } from 'react';


class Shopping extends Component {

    constructor(props) {
        super(props);
        this.state={
        };
    }

    render() {
        const {hover} = this.props;
        return (
            <div className="my-cart" id="js-my-cart" style={{display:hover?'block':'none'}}>
                <div className="cart-title-box clearfix" >
                    <h2 className="l">我的购物车</h2>
                    <h5 className="r">
                        已加入
                        <span className="js-incart-num">0</span>
                        门课程
                    </h5>
                </div>
                <div className="cart-wrap">
                    <div className="clear-cart">
                        <span className="cartIcon icon-shopping-cart"></span>
                        <h3>购物车空空如也</h3>
                        <div className="text">快去这里选购你中意的课程</div>
                        <p>
                            <a href="#" className="go-link" target="_blank">实战课程</a>
                        </p>
                        <p>
                            <a href="#" className="go-link" target="_blank">就业班</a>
                        </p>
                    </div>
                </div>
                <div className="more-box clearfix">
                    <div className="l show-box">
                            <span className="text">
                                <a href="#" target="_blank">我的订单中心</a>
                            </span>
                    </div>
                    <a href="#" className="r moco-btn moco-btn-red go-cart" target="_blank">去购物车</a>
                </div>
            </div>
        );
    }
}

export {
    Shopping
}