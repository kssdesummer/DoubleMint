import React,{Component} from "react";

class Title extends Component {
    constructor(props) {
        super(props);
    }

    titParse = (item,index) =>
        index % 2 === 0 ?
        <span>{item}</span>:
        <b>／</b>
    ;

    render() {
        let {data} = this.props;
        return (
            <h3 className="types-title">
                <span className= {data.titIconL} />
                {data.title.map(this.titParse)}
                <span className= {data.titIconR} />
                {data.more?<a className="lots">{data.more}<i className="imv2-arrow2_r"/></a>:""}
            </h3>
        );
    }
}

export {Title};