import React, { Component } from 'react';

class Topic extends Component{
    constructor(props){
        super(props);
    }

    topicParse = item =>{
        return(
            <div className="part1" key={item.id}>
                <div className="part-up">
                    <h4>{item.header}</h4>
                    <div className="title">
                        <a className="w-title l">
                            <p>{item.title1}</p>
                            <p>{item.p1}</p>
                        </a>
                        <img className="r" src={item.url1} />
                    </div>
                    <p className="content clearfix">{item.content}</p>
                </div>
                <div className="bottom-info clearfix">
                    <a>{item.goKnown}<i className="icon-right"/></a>
                </div>
                <div className="title-line">
                    <div className="title">
                        {item.remind}
                    </div>
                </div>
                <div className="part-down">
                    <div className="title">
                        <a className="w-title l">
                            <p>{item.title2}</p>
                            <p>{item.p2}</p>
                        </a>
                        <img className="r" src={item.url2} />
                    </div>
                </div>
                <div className="part-down">
                    <div className="title">
                        <a className="w-title l">
                            <p>{item.title3}</p>
                            <p>{item.p3}</p>
                        </a>
                        <img className="r" src={item.url3} />
                    </div>
                </div>
                <div className="part-down">
                    <div className="title">
                        <a className="w-title l">
                            <p>{item.title4}</p>
                            <p>{item.p4}</p>
                        </a>
                        <img className="r" src={item.url3} />
                    </div>
                </div>
                <div className="bottom-info clearfix">
                    <a>{item.topics}<i className="icon-right"/></a>
                </div>
            </div>
        )
    };

    render() {
        const {topicList} = this.props;
        return(
            <div>
                {this.topicParse(topicList)}
            </div>
        );
    }
}
export { Topic };