import React, {Component} from 'react'

const list = ['免费课程', '实战课程','就业班', '专栏','猿问','手记'];

const listitems = list.map((list) => {
    return(
        (list !== '专栏')? <li><a href="https://www.imooc.com/">{list}</a></li> : <li><a href="https://www.imooc.com/">{list}<i className = 'icn-news'></i></a></li>
    )
    }
)

class Target extends Component {
    render () {
        return(
            <div>
                <ul className='nav-item'>
                    {listitems}
                </ul>
            </div>
        )
    }
}

export default Target