import React, { Component } from 'react';
import {topicList,articList,faqList,yuanWen} from './YuanWenData';
import {Topic} from "./Topic";
import {Artic} from "./Artic";
import {Question} from "./Question";
import {Title} from "../Tools/Title";

class YuanWen extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className='bg000'>
                <div className="container-types">
                    <Title data={yuanWen}/>
                    <div className="types-content note">
                        <div className="part">
                            <Topic topicList={topicList[0]}/>
                            <Artic articList={articList[0]}/>
                            <Question faqList={faqList[0]}/>
                        </div>
                        <div className="part">
                            <Artic articList={articList[1]}/>
                            <Artic articList={articList[2]}/>
                            <Question faqList={faqList[1]}/>
                            <Question faqList={faqList[2]}/>
                            <Question faqList={faqList[3]}/>
                        </div>
                        <div className="part">
                            <Artic articList={articList[3]}/>
                            <Artic articList={articList[4]}/>
                            <Artic articList={articList[5]}/>
                            <Question faqList={faqList[4]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { YuanWen };