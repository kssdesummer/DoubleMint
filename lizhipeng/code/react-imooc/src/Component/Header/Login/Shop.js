import React, {Component} from 'react'

class Shop extends Component{
    render(){
        const {onMouseEnterShop,onMouseLeaveShop,shopShow} = this.props
        return(
            <div className="shop" 
                onMouseEnter = {onMouseEnterShop} 
                onMouseLeave = {onMouseLeaveShop}
            >
                <li className="shop-cart">
                    <a href="https://www.imooc.com/" className="shop-cart-icon">
                        <span className="icon-shopping-cart js-endcart"></span>
                        <span >购物车</span>
                    </a>
                    <div className="my-cart" id="js-my-cart" 
                        style={{display:shopShow?'block':'none'}}
                    >
                        <div className="cart-title-box clearfix">
                            <h2 className="l">我的购物车</h2>
                            <h5 className="r">
                                已加入0门课程
                            </h5>
                        </div>
                        <div className="cart-wrap">
                            <div className="clear-cart">
                                <span className="cartIcon icon-shopping-cart"></span>
                                <h3>购物车空空如也</h3>
                                <div className="text">快去这里选购你中意的课程</div>
                                <p><a href="https://www.imooc.com/" className="go-link">实战课程</a></p>
                                <p><a href="https://www.imooc.com/" className="go-link">就业班</a></p>
                            </div>
                        </div>
                        <div className="more-box clearfix">
                            <div className="l show-box">
                                <span className="text">
                                    <a href="https://www.imooc.com/">我的订单中心</a>
                                </span>
                            </div>
                             <a href="https://www.imooc.com/" className="r moco-btn moco-btn-red go-cart">去购物车</a>
                        </div>
                    </div>
                    </li>
            </div>
        )
    }
}

export default Shop