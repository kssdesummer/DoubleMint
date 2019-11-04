import React ,{Component} from 'react'
import './Body.css'
import Bgfff1 from './Bgfff1/Bgfff1'
import Bg000 from './Bg000/Bg000'

class Body extends Component {
    render(){
        return(
            <div id = 'main'>
                <div className='bk'> </div>
                <Bgfff1 />
                <Bg000 />
            </div>
        )
    }
}

export default Body