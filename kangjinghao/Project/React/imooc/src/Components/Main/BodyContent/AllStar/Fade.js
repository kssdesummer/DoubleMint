import React,{Component} from "react";
import "./AllStar.css"

class Fade extends Component{
    constructor(props){
        super(props);
        this.state={
            hover:false,
        }
    }
    // 鼠标悬停事件
    onMouseEnter = () =>{
        this.setState({
            hover:true,
        });
        clearInterval(this.timer)
    };

    onMouseLeave = () =>{
        this.timer = setInterval(()=>{
            this.setState({
                hover:false,
            })
        },100)
    };
    render() {
        let {hover} = this.state;
        let {item} = this.props;
        return (
            <div className={item.class}
                 key={item.id}
                 onMouseLeave={this.onMouseLeave}
                 onMouseEnter={this.onMouseEnter}
            >
                <img src={item.src}/>
                <div className={hover?"hidden show":"hidden hide"} style={{display:hover?"block":"none"}}>
                    <p className="title">{item.title}</p>
                    <p className="id">{item.name}</p>
                    <p className="desc">{item.desc}</p>
                    <span className="cur">{item.cur}</span>
                </div>
            </div>
        );
    }
}
export {Fade};