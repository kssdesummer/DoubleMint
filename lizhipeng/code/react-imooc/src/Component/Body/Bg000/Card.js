import React ,{Component} from 'react'

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:-1
        }
    }
    onMouseEnter = (target) =>
    {
        this.setState(
            {num:target}
        )
    }
    onMouseLeave = (target) => {
        this.setState(
            {num:target}
        )
    }
    render(){
        const card = this.props.card
        const ID = this.props.ID
        const curr = this.props.curr
        return(
            card.map((data,i) =>{
                return(
                    <div className = 'index-card-container course-card-container container' key = {i}  style={ID===1? {display:curr?i<8?'block':'none':i>=8?'block':'none'}:null} >  
                        <a className="course-card" href = 'https://www.imooc.com/'>
                        {data.new?
                            ID ===0?                        
                                <div className="course-stat new">
                                    新课
                                </div>
                            :
                                <div className="course-stat upgrade">
                                    升级
                                </div>
                        :null
                        }
                            <div className="course-card-top hashadow">
                                <img className="course-banner" src={data.img} alt = ''/>
                                <div className="course-label">
                                    {data.label.map(
                                        (label) =><label>{label}</label>
                                    )}
                                </div>
                            </div>
                            <div className="course-card-content">
                                    <h3 className="course-card-name">{data.cardname}</h3>
                                    <div className="clearfix course-card-bottom">
                                        <div className="course-card-info">
                                            <span>{data.cardinfo[0]}</span>
                                            <span><i className="imv2-set-sns"></i>{data.cardinfo[1]}</span>
                                            {ID === 1&&i>=8?
                                                <p className="desc">{data.carddesc}</p>
                                            :
                                            <span className="r js-hover-evaluation" id = {data.id}
                                                onMouseEnter = {()=>this.onMouseEnter(data.id)}
                                                onMouseLeave = {()=>this.onMouseLeave(-1)}
                                            >{data.cardinfo[2]}</span>
                                            }
                                        </div>
                                        {ID === 1&&i>=8?null:
                                            <div>
                                                <div className = 'evaluation-desc-box clearfix' style = {{display:this.state.num === i?'block':'none'}}>
                                                    <i className="trangle"></i>
                                                    <div className="left-box l">
                                                        <p>{data.leftbox[0]}</p>
                                                        <p className="big-text">{data.leftbox[1]}</p>
                                                        <p>{data.leftbox[2]}</p>
                                                    </div>
                                                    <div className="rightcourse-card-container-box right-box l">
                                                        <p>{data.rightbox[0]}<span>10.00</span></p>
                                                        <p>{data.rightbox[1]}<span>10.00</span></p>
                                                        <p>{data.rightbox[2]}<span>10.00</span></p>
                                                    </div>
                                                </div>
                                                <div className="course-card-price">{data.price}</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                        </a>
                    </div>
                )
            })
        )
    }
}

export default Card