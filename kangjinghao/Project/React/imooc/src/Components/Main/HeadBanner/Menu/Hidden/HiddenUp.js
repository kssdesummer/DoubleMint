import React,{Component} from "react";

class HiddenUp extends Component{
    constructor(props){
        super(props);
    }

    // link = item =>{
    //     <a target="_blank" key={item.id} href={item.url}>{item.name}</a>
    // };

    render() {
        let {item} = this.props;
        return (
            <div className="hidden_part">
                <div className="title_part">
                    <span className="bold mr10 l small-title">{item.title}</span>
                </div>
                <div className="hidden_part_box">
                    {item.list.map(item =>
                        <a target="_blank" key={item.id} href={item.url}>{item.name}</a>
                    )}
                </div>
            </div>
        );
    }
}

export {HiddenUp};

