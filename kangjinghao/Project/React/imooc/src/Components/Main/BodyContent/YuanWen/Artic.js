import React, { Component } from 'react';

class Artic extends Component{
    constructor(props){
        super(props);
    }

    articParse = item =>{
        return(
            <div className="part2">
                <div className="part-up">
                    <div className="header"><i className="icon-blog"/><span>{item.header}</span></div>
                    <div className="title">
                        <a className="w-title l">
                            {item.title}
                        </a>
                        <img className="r" src={item.url1}/>
                    </div>
                </div>
                <div className="part-down">
                    <p className="content">
                        {item.content}
                    </p>
                    <div className="footer">
                        <span>{item.scan}</span>
                        <span>{item.recommend}</span>
                        <a>{item.detail}<i className="icon-right"/> </a>
                    </div>

                </div>
            </div>
        )
    };

    render() {
        let {articList} = this.props;
        return(
            <div>
                {this.articParse(articList)}
            </div>
        );
    }
}
export { Artic };