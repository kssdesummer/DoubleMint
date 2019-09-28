import React,{Component} from "react";

class CardUp extends Component{
    constructor(props){
        super(props);
    }


    render() {
        let {item} = this.props;
        return (
            <div className="col-md two-box">
                <div className="card">
                    <div className="course-up">
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                    </div>
                    <img className="card-img-top" src={item.img} />
                    <div className="card-body course-down" />
                </div>
            </div>
        );
    }
}

export {CardUp};