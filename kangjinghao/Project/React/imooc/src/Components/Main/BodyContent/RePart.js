import React,{Component} from "react";
import {Two} from "./Tools/Two";
import {FirstLine} from "./Tools/FirstLine";
import {SecondLine} from "./Tools/SecondLine";
import {Title} from "./Tools/Title";

class RePart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {item} = this.props;
        return (
            <div className={item.bf === 'fff'?"bgfff":"bg000"}>
                <div className="container-types clearfix">
                    <Title data={item}/>
                    <div className="types-content clearfix">
                        <div className="container-fluid">
                            {item.cardData?<Two data={item}/>:""}
                            {item.cardData1?<FirstLine data={item}/>:""}
                            {item.cardData2? <SecondLine data={item}/> :""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {RePart};