import React, {Component} from 'react';
import LunboData from './Data';

class Lunbo extends Component{
    constructor(props){
        super(props)
        this.state = (
            {
                showIndex: 0,
                timer: null
            }   
        )
    }

    componentDidMount() {
        this.start()
    }
   
    componentWillUnmount() {
        this.stop()
    }

    start = ()=>{
        let timer = this.state.timer 
        timer=setInterval(()=>{
            this.next();
        },2000)
        this.setState(
            {timer}
        )
    }

    stop = ()=>{
            let timer = this.state.timer;
            this.setState(
                clearInterval(timer)
            )
    }
   
    next = (e) => {
        let ev = e || window.event;
        let {showIndex} = this.state;
        if(showIndex >= 5){
            showIndex = 0;
        }else{
            showIndex ++;
        }
        console.log(showIndex)
        this.setState({
            showIndex
        })
    }


    previous = (e) => {
        let ev = e || window.event;
        let {showIndex} = this.state;
        if(showIndex === 0){
            showIndex = 5;
        }else{
            showIndex --;
        }
        this.setState({
            showIndex
        })
    }

    render() {
        return(
            <div className="g-banner-content">
                <div className="g-banner-box" 
                    onMouseEnter = {this.stop}
                    onMouseLeave = {this.start}>
                    {LunboData.map((src,index) => 
                            <div className="banner-slide"
                                key = {index} 
                                style = {
                                    index===this.state.showIndex?
                                        {display:'block'}
                                        :{display:'none'}}
                            >
                                <img src={src.img} alt = '' /> 
                            </div>
                    )}
                    <div className="banner-dots">
                        {
                            LunboData.map((tag,index) =>
                                <span className={index === this.state.showIndex?"tab active":"tab"} key = {index}
                                ></span>
                            )
                        }
                    </div>
                    <a href="javascript:" className="banner-anchor prev icon-left2" onClick = {(e)=>{this.previous(e)}}></a>
                    <a href="javascript:" className="banner-anchor next icon-right2" onClick = {(e)=>{this.next(e)}}></a>
                </div>
            </div>
        )
    }
}
export default Lunbo