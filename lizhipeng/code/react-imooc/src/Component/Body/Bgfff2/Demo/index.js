import React , {Component} from 'react'
import luxian from '../Data'

class Demo  extends Component{
    render(){
        return(
            luxian.demo.map(
                (data,j) => 
                    <div className = 'clearfix types-content js-path-content' key = {j} style={{display:this.props.curr===j?'block':'none'}}>
                        {
                            data.map(
                                (card,i) => 
                                    <div className = 'course-path-container' key = {i}>
                                        <a  href="https://www.imooc.com/">                    
                                            <div className="course-banner">                        
                                                <div>
                                                    <img  className="img-up" src = {card.img} alt = ''/>
                                                </div>                        
                                                <div>
                                                    <img  className="img-mid" src = {card.img} alt = ''/>
                                                </div>
                                                <div>
                                                    <img  className="img-down" src = {card.img} alt = ''/>
                                                </div>                    
                                            </div>                    
                                            <h4>{card.h4}</h4>                    
                                            <p>{card.p}</p>
                                            <div className="course-path-info">                        
                                                <span>{card.span}</span>
                                                <span><i className="imv2-star2"></i>{card.num}</span>
                                            </div>                
                                        </a>
                                    </div>
                            )
                        }
                    </div>
                )
        )
    }
}

export default Demo