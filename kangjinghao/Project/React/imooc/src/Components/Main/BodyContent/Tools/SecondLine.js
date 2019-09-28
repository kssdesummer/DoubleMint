import React,{Component} from "react";

class SecondLine extends Component {
    constructor(props) {
        super(props);
    }

    InfoParse = item =>{
        return(
            <div className="col-md">
                <div className="card">
                    {item.id === 0 ? "" :
                        <div
                            className={item.id === 1 ? "s-logo new" : "s-logo" || item.id === 2 ? "s-logo updata" : "s-logo"}>{item.sLogo}</div>
                    }<div className="course-card-lable">
                    {item.span.map(item=> item?
                        <span>{item}</span>:""
                    )}
                    </div>
                    <img className="card-img-top" src={item.img} />
                    <div className="card-body">
                        <div className="card-content">
                            <h3>{item.h3}</h3>
                            <div className="course-card-bottom">
                                <div className="card-info">
                                    <span>{item.class}</span>
                                    <span>{item.course}</span>
                                    <span>
                                                <i className="imv2-set-sns" />{item.count}
                                            </span>
                                    {item.star === "5" ?
                                        <span className="course-star-box">
                                                    <i className="icon-star2 on" />
                                                    <i className="icon-star2 on" />
                                                    <i className="icon-star2 on" />
                                                    <i className="icon-star2 on" />
                                                    <i className="icon-star2 on" />
                                                </span>:""}
                                </div>
                                <div className="course-card-price sales">
                                    {item.price}
                                    <span className="cost-price">{item.cost}</span>
                                    <span className="sales-tip">{item.stime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        let {data} = this.props;
        return (
            <div className="row">
            {data.cardData2.map(this.InfoParse)}
            </div>
        );
    }
}
export {SecondLine};