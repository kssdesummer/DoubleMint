import React,{Component} from "react";
import {Two} from "./Two";
import {FirstLine} from "./FirstLine";
import {SecondLine} from "./SecondLine";
import {Title} from "./Title";

class RePart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;
        return (
            <div className={data.bf === 'fff'?"bgfff":"bg000"}>
                <div className="container-types clearfix">
                    <Title data={data}/>
                    <div className="types-content clearfix">
                        <div className="container-fluid">
                            {data.cardData?<Two data={data}/>:""}
                            {data.cardData1?<FirstLine data={data}/>:""}
                            {data.cardData2? <SecondLine data={data}/> :""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {RePart};