import React ,{Component} from 'react'
import PathData from './Data'
import Card from './Card'
import H3 from './H3'

class Bg000 extends Component {
    constructor(props){
        super(props);
        this.state=
            {
                curr : true,
            }
        }

    onClick1 = () =>{
        return(
            this.setState(
                {
                    curr : true,
                }
            )
        )
    }

    onClick2 = () =>
        this.setState(
            {
                curr : false,
            }
        )
        
    render(){
        const num1 = 0
        return(
            PathData.map((data,i) => {
                return(       
                    num1 === i?
                    <div className = 'bg000'>
                        <div className = 'container-types clearfix'>
                            <H3
                                data = {data}
                                i = {i} 
                            />
                            <div className = "clearfix types-content">
                                <Card 
                                    card = {data.card}
                                    ID = {i}
                                />
                            </div>
                        </div>
                    </div>
                    :null
                )
            })
        )
    }
}

export default Bg000