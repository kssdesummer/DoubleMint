import React ,{Component} from 'react'
import './GotoTop.css'


class GotoTop extends Component{
    constructor(props){
        super(props)
        this.state = (
            {flag:false}
        )
    }
    componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll=()=>{
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        scrollTop>666?
            this.setState(
                {flag:true}
            ):
            this.setState(
                {flag:false}
            )
    }
    handleScrollTop(){
        window.scrollTo({
            left:0,
            top:0,
            behavior:'smooth',
        })
    }
    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        return(
            <div id="J_GotoTop" className="elevator">    
                <a href="https://www.imooc.com/" className="elevator-msg" >        
                    <i className="icon-feedback"></i>        
                    <span>意见反馈</span>    
                </a>    
                <a href="https://www.imooc.com/" className="elevator-faq" >        
                    <i className="icon-ques"></i>        
                    <span>帮助中心</span>    
                </a>    
                <a href="https://www.imooc.com/"  className="elevator-app">        
                    <i className="icon-appdownload"></i>        
                    <span>APP下载</span>        
                    <div className="elevator-app-box"></div>    
                </a>    
                <a href="javascript:void(0)" className="elevator-weixin" id="js-elevator-weixin">        
                    <i className="icon-wxgzh"></i>        
                    <span>官方微信</span>        
                    <div className="elevator-weixin-box"></div>    
                </a>    
                <a href="javascript:void(0)" className="elevator-top no-goto" id="backTop"
                    style={{display:this.state.flag?'block':'none'}}
                    onClick = {this.handleScrollTop}
                >        
                    <i className="icon-up2"></i>        
                    <span>返回顶部</span>   
                </a>
            </div>
        )
    }
}

export default GotoTop