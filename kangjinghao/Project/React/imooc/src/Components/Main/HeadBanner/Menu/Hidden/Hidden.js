import React,{Component} from "react";
import {HiddenUp} from "./HiddenUp";
import {HiddenDown} from "./HiddenDown";

class Hidden extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let {isHover,item} = this.props;
        return (
            <div>
            {isHover===item.id?
                <div className="menuHidden" >
                    {/*隐藏部分的上半部分*/}
                    <div className="innerBox clearfix">
                        <div className="subinnerBox">
                            <div className="hiddenUp clearfix">
                                {item.menuContent.header.map(item =>
                                    <HiddenUp item={item}/>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*隐藏部分的下半部分*/}
                    <div className="hiddenDown">
                        {item.menuContent.bottom.map(item =>
                            <HiddenDown item={item}/>
                        )}
                    </div>
                </div>
                :false}
            </div>
        );
    }

}
export {Hidden};