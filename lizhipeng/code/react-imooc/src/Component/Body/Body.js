import React ,{Component} from 'react'
import './Body.css'
import MenuContent from './MenuContent'
import Submenu from './Submenu/Submenu'

class Body extends Component {
    render(){
        return(
            <div id = 'main'>
                <div className='bk'> </div>
                <div className = 'bgfff banner-box'>
                    <div className = 'g-banner pr'>
                        <div class="menuwrap"></div>
                        <MenuContent />
                        <Submenu />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body