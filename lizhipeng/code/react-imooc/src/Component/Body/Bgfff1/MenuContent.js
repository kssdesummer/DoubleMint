import React ,{Component} from 'react'
import subList from './Submenu/Data'


class MenuContent extends Component {
    onMouseEnter = (target) =>{
        this.props.callBackEnter&&this.props.callBackEnter(target)
    }
    render(){
        return(
            <div className = 'menuContent' >
                {
                    subList.map((data)=>{
                        return(
                            <div className="item" id = {data.id}
                                 onMouseEnter = {()=>this.onMouseEnter(data.id)}
                            >
                                <a href="https://www.imooc.com/">
                                    <span className="group">{data.item}</span>
                                    <i className="imv2-arrow1_r"></i>
                                </a>
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default MenuContent