import React, {Component} from 'react';
import subList from './Data'
import Box from './Box'
import recommentBox from './recommentBox'
 
const submenuList = subList.map((subList) => {
    return(
        <div class="submenu a hide">
            <div class="innerBox clearfix">
                <div class="subinnerBox">
                    <div class="cates-box">
                        {Box}
                    </div>
                </div>
            </div>
            {recommentBox}        
        </div>
    )
})

class Submenu extends Component{
    render() {
        return(
            {submenuList}
        );
    }
}
export default Submenu