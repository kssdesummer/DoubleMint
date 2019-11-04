import React ,{Component} from 'react'
import PathData from './Data'
import Card from './Card'

class Bg000 extends Component {
    constructor(props){
        super(props);
        this.state=
            {
                curr : true,
            }
        }

    onClick1 = () =>{
        return(
            this.setState(
                {
                    curr : true,
                }
            )
        )
    }

    onClick2 = () =>
        this.setState(
            {
                curr : false,
            }
        )
    render(){
        return(
            PathData.map((data,i) => {
                const {num1,num2} = this.props
                return(
                    <div className = 'bg000'>
                        <div className = 'container-types clearfix'>
                        {
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
                                        <li className={this.state.curr?'curr':null} onClick = {this.onClick1}>实战课程</li>
                                        <li className={this.state.curr?null:'curr'} onClick = {this.onClick2}>免费课程</li>
                                    </ul>
                                    <a href="https://www.imooc.com/" className="banner_wk r hide" style= {{display:this.state.curr?'none':'block'}}></a>
                                </h3>
                        }
                            <div className = "clearfix types-content">
                                <Card 
                                    card = {data.card}
                                    ID = {i}
                                    curr = {this.state.curr}
                                />
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Bg000