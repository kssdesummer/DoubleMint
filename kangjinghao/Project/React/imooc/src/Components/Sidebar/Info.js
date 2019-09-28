import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {item} = this.props;
        return(
            <a href={item.url} className={item.name}>
                <i className={item.iName}/>
                <span className="">{item.content}</span>
                {item.div?<div className={item.div}/>:""}
            </a>
        )}
}
export {Info}