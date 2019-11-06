import React , {Component} from 'react'
import mkData from './Data'

class Bgfff3 extends Component{
    render(){
        return(
                <div className = 'bgfff'>
                    <div className = 'container-types container-read clearfix'>
                        <h3 className = 'types-title clearfix'> 
                            <span>
                                {mkData.title}
                            </span>
                            <a href="https://www.imooc.com/"  className="more">
                                {mkData.search}
                                <i className="imv2-right2"></i>
                            </a>
                        </h3>
                        <div className = 'clearfix types-content'>
                            {mkData.demo.map(
                                (item,i) => 
                                    <div className='course-read-container' key = {i}>
                                        <div className= 'course-banner'>
                                            <a href = 'https://www.imooc.com/' alt = ''></a>
                                            <img src={item.img} alt=""/>
                                            <div className="try-read-img">{mkData.try}</div>
                                        </div>
                                        <h4>
                                            <a href="https://www.imooc.com/">{item.h4}</a>
                                        </h4>
                                        <div className="course-read-info">                  
                                            <span>{item.span}</span>              
                                        </div>
                                        <div className="course-read-teacher">                  
                                            <a href="https://www.imooc.com/">
                                                <span>{item.teacher}</span> 
                                                {item.a}
                                            </a>              
                                        </div>
                                        <div className="course-read-price">                                                  
                                            <a href="https://www.imooc.com/" className="course-card-price">
                                                <span className="sale">{item.newPrice}</span>
                                                {item.youhui?
                                                    <span className="ori">{item.newPrice}</span>                    
                                                :null}         
                                                {
                                                    item.youhui?
                                                        <div className="countdown r">                    
                                                            <span className="name">{item.tag}</span>                                  
                                                        </div>  
                                                    :null  
                                                }    
                                            </a>                                              
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Bgfff3