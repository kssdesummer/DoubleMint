import React,{Component} from "react";
import {RePart} from "../RePart";
import {data} from "../BodyData";

// 再现经典五合一
class SHJQX extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {data.map(item=>
                    <RePart item={item}/>
                )}
            </div>
        );
    }
}

export {SHJQX};