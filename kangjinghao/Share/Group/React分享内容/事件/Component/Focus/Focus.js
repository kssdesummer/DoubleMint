import React, { Component } from 'react';
import './Focus.css';

class Focus extends Component {
    constructor(props){
        super(props);
        this.state = {
            focus:false,
        };
    }
    onFocus = () => {
        this.setState({
            focus:true,
        })
    };
    onBlur = () => {
        this.setState({
            focus:false,
        })
    };
    render(){
        let {focus} = this.state;
        return (
            <div className={`Focus ${focus?'onfocus':''}`}>
                <input type="text"
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}/>
                <button/>
            </div>
        );
    }
}

export default Focus;
