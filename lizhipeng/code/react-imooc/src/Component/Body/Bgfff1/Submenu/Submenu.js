import React, {Component} from 'react';
import subList from './Data'
import Box from './Box'
import RecommentBox from './RecommentBox'
 
class Submenu extends Component{
    render() {
        const setId = this.props.setId
        return(
            subList.map((subList,i) => {
                return( 
                    <div className={subList.subClassName} id = {i}
                        style = {{display:setId === i?'block':'none'}}
                        onMouseEnter = {this.onMouseEnter}
                        onMouseLeave = {this.onMouseLeave}    >             
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