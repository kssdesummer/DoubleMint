import React,{Component} from "react";
import {CardDown} from "./CardDown"

class FirstLine extends Component{
    constructor(props){
        super(props);
    }


    render() {
        let {data} = this.props;
        return (
            <div className="row">
                {data.cardData1.map(item =>
                    <CardDown item={item}/>
                )}
            </div>
        );
    }
}

export {FirstLine};