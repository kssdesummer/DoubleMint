import React , {Component} from 'react'
import luxian from './Data'
import Demo from './Demo'

class Bgfff2 extends Component{
    constructor(props){
        super(props);
        this.state=
            {
                curr : 0,
            }
        }
    onClick= (i) =>{
            this.setState(
                {
                    curr :i,
                }
        )
    }
    render(){
        return(
            <div className = 'bgfff'>
                <div className = 'container-types container-path clearfix'>
                    <h3 className = 'types-title clearfix'> 
                        <span>
                            {luxian.title}
                        </span>
                        <ul className="js-rank-tab">
                            {luxian.tag.map(
                                (data,i) => 
                                    <li id={i} className={this.state.curr===i?"curr":null} onClick = {()=>this.onClick(i)}>{data}</li> 
                            )}                                           
                        </ul>
                        <a href="https://www.imooc.com/"  className="more">
                            查看更多
                             <i className="imv2-right2"></i>
                        </a>
                     </h3>
                     <Demo 
                        curr = {this.state.curr}
                     />
                </div>
            </div>
        )
    }
}

export default Bgfff2