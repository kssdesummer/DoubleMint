import React , {Component} from 'react'
import './Footer.css'

const linkData = ['企业合作','人才招聘','联系我们','讲师招募','帮助中心','意见反馈','慕课大学','代码托管','友情链接',]

class Footer extends Component{
    render(){
        return(
            <div className="footer idx-minwidth"> 
                <div className="container-footer">    
                    <div className="footer-wrap idx-width">      
                        <div className="footer-sns clearfix">      	
                            <div className="l">      		
                                <a href="javascript:void(0);" className="footer-sns-weixin" title="微信">	         	
                                    <i className="footer-sns-weixin-expand"></i>	        
                                </a>	        
                                <p>官方公众号</p>      	
                            </div>      	
                            <div className="l">      		
                                <a href="http://weibo.com/u/3306361973" className="footer-sns-weibo hide-text" title="新浪微博">
                                </a>      		
                                <p>官方微博</p>      	
                            </div>      
                        </div>    
                    </div>    
                    <div className="footer-link">
                        {linkData.map(
                            item => 
                                <a href="https://www.imooc.com/" title={item}>{item}</a>      
                        )}
                    </div>        
                    <div className="footer-copyright">     
                        <p>
                            <img draggable="false" className="moco-emoji" src="https://www.imooc.com/static/moco/v1.0/images/face/36x36/a9.png" />
                            &nbsp;2019&nbsp;imooc.com&nbsp;&nbsp;京ICP备 12003892号-11 北京奥鹏文化传媒有限公司
                        </p>    
                    </div>  
                </div>
            </div>
        )
    }

}

export default Footer