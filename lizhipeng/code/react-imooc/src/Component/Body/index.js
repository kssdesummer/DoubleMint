import React ,{Component} from 'react'
import './Body.css'
import Bgfff1 from './Bgfff1'
import Bg000 from './Bg000/Bg000'
import Bg0001 from './Bg000/Bg0001'
import Bgfff2 from './Bgfff2'
import Bgfff3 from './Bgfff3'
class Body extends Component {
    render(){
        return(
            <div id = 'main'>
                <div className='bk'> </div>
                <Bgfff1 />
                <Bg000 />
                <Bgfff2 />
                <Bg0001 />
                <Bgfff3 />
            </div>
        )
    }
}

export default Body