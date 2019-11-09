import React, {Component} from 'react'

const list = [
    {
        'title' : 'Vue',
        'class' : '',
        'href' : 'https://www.imooc.com',
        'target' : '_blank',
    },
    {
        'title' : 'Python',
        'class' : 'last',
        'href' : 'https://www.imooc.com',
        'target' : '_blank',
    }
]

const listitems = list.map((list) => {
    return(
        <a href={list.href} target={list.target} className={list.class}>{list.title}</a>
    )
    }
)

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            focus:false
        }
    }
    onFocus = () =>{
        this.setState({
            focus:true
        })
    }

    onBlur = () =>{
        this.setState({
            focus:false
        })
    }

    getFocus = () =>{
        this.setState(
            this.refs.getInput.focus()
        )
    }


    render(){ 
        const onFocus = this.onFocus
        const onBlur = this.onBlur
        const getFocus = this.getFocus
        return(
            <div className='search-warp clearfix'>
                <div className="search-area" data-search="top-banner">
                    <input className="search-input" ref = 'getInput'
                        type="text"  placeholder="请输入关键字..."
                        onFocus={onFocus} onBlur = {onBlur}
                    />
                    <input className="btn_search" type="hidden" data-search-btn="search-btn"/>
                    <div className="hotTags" style={{display:this.state.focus?"none":"block"}} >
                        {listitems}
                    </div>
                </div>
                <div className="showhide-search" data-show="no" >
                    <i className="icon-search" onMouseDown = {onBlur} onMouseUp = {getFocus}></i>
                </div>
            </div>
        )
    }
}

export default Search