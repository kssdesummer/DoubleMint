import React, {Component} from 'react';
import subList from './Data'
import Box from './Box'
import RecommentBox from './RecommentBox'
 
class Submenu extends Component{
    render() {
        return(
            subList.map(subList => {
                return(          
                    <div className="submenu a hide">
                        <div className="innerBox clearfix">
                            <div className="subinnerBox">
                                <div className="cates-box">
                                    <Box
                                        boxData = {subList.tagBoxList}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = 'recomment-box'>
                            <RecommentBox 
                                recData = {subList.recBoxList}
                            />    
                        </div>
                    </div>
                )
            })
        );
    }
}
export default Submenu