import React,{Component} from "react";
import {CardUp} from "./CardUp"

class Two extends Component{
    constructor(props){
        super(props);
    }


    render() {
        let {data} = this.props;
        return (
            <div className="row">
                {data.cardData.map(item =>
                    <CardUp item={item}/>
                )}
            </div>
        );
    }
}

export {Two};