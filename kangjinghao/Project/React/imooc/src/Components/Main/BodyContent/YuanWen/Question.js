import React, { Component } from 'react';

class Question extends Component{
    constructor(props){
        super(props);
    }

    faqParse = item =>{
        return(
            <div className="part3" key={item.id}>
                <div className="part-up">
                    <div className="header"><i className="icon-yuanwen"/>{item.header}</div>
                    <div className="title">
                        <a className="w-title l">
                            {item.title}
                        </a>
                    </div>
                </div>
                <div className="part-down">
                    <span>{item.answer}</span>
                    <p className="content">{item.content}</p>
                    <div className="footer">
                        <a>{item.recommend}<i className="icon-right"/> </a>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        let {faqList} = this.props;
        return(
            <div>
                {this.faqParse(faqList)}
            </div>
        );
    }
}
export { Question };