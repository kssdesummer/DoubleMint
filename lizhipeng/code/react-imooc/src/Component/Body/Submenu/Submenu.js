import React, {Component} from 'react';
import subList from './Data'
import Box from './Box'
import RecommentBox from './recommentBox'
 
class Submenu extends Component{
    render() {
        return(
            subList.map(subList => 
                <div class="submenu a hide">
                    <div class="innerBox clearfix">
                        <div class="subinnerBox">
                            <div class="cates-box">
                                <Box
                                    boxData = {subList.tagBoxList}
                                />
                            </div>
                        </div>
                    </div>

                    <RecommentBox 
                        recData = {subList.recBoxList}
                    />    
                </div>
            )
        );
    }
}
export default Submenu