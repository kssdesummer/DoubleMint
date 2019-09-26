import React, { Component } from 'react';
import './Click.css';

class Click extends Component {
    constructor(props){
        super(props);
        this.state = {
            click:0,
        };
    }
    onClick = () => {
        let {click} = this.state;
        this.setState({
            click:1-click
        })
    };

    render(){
        let {click} = this.state;
        return (
            <div className='Click'>
                <div className={`move ${click===1?'moving_l':'moving_r'}`}/>
                <span onClick={this.onClick}>点我</span>
            </div>
        );
    }
}

export default Click;
