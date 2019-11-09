import React, {Component} from 'react'

class Logo extends Component {
    render () {
        return(
            <div className='logo'>
                <a href="https://www.imooc.com/" title="首页">
                    <img src={require("../img/logo.png")} title="慕课网" alt = '' className = 'logo-img'/>
                </a>
            </div>
        )
    }
}

export default Logo