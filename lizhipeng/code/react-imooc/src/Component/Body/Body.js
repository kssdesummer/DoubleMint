import React ,{Component} from 'react'
import './Body.css'
import MenuContent from './MenuContent'
import Submenu from './Submenu/Submenu'
import Lunbo from './Lunbo/Lunbo'

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemId:'-1'
        }
    }
    getDataEnter = id => {
        return(
            this.setState({
                itemId:id
            })
        )
    }

    getDataLeave = id => {
        return(
            this.setState({
                itemId:id
            })
        )
    }

    onMouseLeave = () =>
        this.setState({
            itemId:'-1'
        })
    
    render(){
        return(
            <div id = 'main'>
                <div className='bk'> </div>
                <div className = 'bgfff banner-box'>
                    <div className = 'g-banner pr'>
                        <div className="menuwrap"></div>
                        <div onMouseLeave = {this.onMouseLeave}>
                            <MenuContent 
                                callBackEnter = {(data)=>this.getDataEnter(data)}
                            />
                            <Submenu 
                                setId = {this.state.itemId}
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Body