import React ,{Component} from 'react'

class H3 extends Component{

    render(){
        const data = this.props.data
        const i =this.props.i
        const curr = this.props.curr
        const onClick1 = this.props.onClick1
        const onClick2 = this.props.onClick2
        return(
            i === 0?
                <h3 className = 'types-title clearfix'>
                    <span>{data.title}</span>
                </h3>
            :
                <h3 className = 'types-title clearfix'>
                    <span>{data.title}</span>
                    <div className="l rank-info">
                        <i className="imv2-ques"></i>
                        <dl className="info">
                            <dt>实战课排行榜规则</dt>
                            <dd>根据近30天购买人数由高到低进行推荐</dd>
                            <dt className="free">免费课排行榜规则</dt>
                            <dd>根据近30天观看人数由高到低进行推荐</dd>
                        </dl>
                    </div>
                    <ul className="js-rank-tab">
                        <li className={curr?'curr':null} onClick = {onClick1}>实战课程</li>
                        <li className={curr?null:'curr'} onClick = {onClick2}>免费课程</li>
                    </ul>
                    <a href="https://www.imooc.com/" className="banner_wk r hide" style= {{display:curr?'none':'block'}}></a>
                </h3>
        )
    }
}

export default H3