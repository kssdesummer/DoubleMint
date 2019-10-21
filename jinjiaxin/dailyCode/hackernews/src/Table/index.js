
import React, { Component } from 'react';
import Info from "./Contents";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        let {list, onDismiss} = this.props;
        return (
            <div  className="table">
                {list.map((item,key)=>
                    <Info
                        key={key}
                        item={item}
                        onDismiss={onDismiss}/>
                )}
            </div>
        )
    }
}
export default Table;