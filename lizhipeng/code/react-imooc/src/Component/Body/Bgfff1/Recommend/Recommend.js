import React ,{Component} from 'react'
import RecData from './Data'

class Recommend extends Component {
    render(){
        return(
            RecData.map(
                (datas,i) =>{
                    return(
                        <div className = 'container-types container-recommend clearfix' key = {i}>
                            <h3 className={i === 0?"types-title title-top clearfix":"types-title clearfix"}>         
                                <span>{datas.title[0]}</span>
                                <span className="intro">{datas.title[1]}</span>
                            </h3>
                            <div className = {i === 0?'path-list clearfix':'recommend-box'}>
                                    {
                                        i === 0?
                                        datas.tag.map(
                                            (data,x) => 
                                                <a href="#" target="_blank" key = {x}>
                                                    <i className={data[0]}></i>
                                                    <p className="tit">{data[1]}</p>
                                                    <p className="desc">{data[2]}</p>
                                                </a>
                                        )
                                        :
                                        datas.img.map(
                                            (data,j) => 
                                                <a href="#" target="_blank" key = {j}>
                                                    <div className = 'l'>
                                                        <img className = 'recommend l' src = {data} alt = '' target="_blank"/>
                                                    </div>
                                                </a>
                                        )
                                    }
                                </div>
                        </div>
                    )                
                }
            )
        )
    }
}

export default Recommend