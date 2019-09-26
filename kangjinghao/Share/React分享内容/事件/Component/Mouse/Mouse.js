import React, { Component } from 'react';
import './Mouse.css';

class Mouse extends Component {
    constructor(props){
        super(props);
        this.state = {
            hover:false,
        };
    }
    onMouseEnter = () => {
        this.setState({
            hover:true
        })
    };
    onMouseLeave = () => {
        this.setState({
            hover:false
        })
    };
    render(){
        let {hover} = this.state;
        return (
            <div className='Mouse'>
                <h1  onMouseEnter={this.onMouseEnter}
                     onMouseLeave={this.onMouseLeave}
                     style={{color:hover?'red':'black'}}>鼠标放在这里</h1>
                <div className={hover?'show':'hide'}/>
            </div>
        );
    }
}

export default Mouse;
