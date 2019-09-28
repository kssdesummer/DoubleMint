import React, { Component } from 'react';

const center_content = [
    {
        id: 1,
        class:"java",
        name: 'Java入门',
        url: '#',
    },
    {
        id: 2,
        class:"html",
        name: '前端入门',
        url: '#',
    },

];

class Search extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.state={
            data:center_content,
            isHover:false,
            isClick:false,
            isFocus:false,
        };
    }
    // hover悬停效果
    onMouseEnter = () => {
        this.setState({isHover:true,})
    };
    onMouseLeave = () => {
        this.setState({isHover:false,})
    };
    //  失去焦点
    inputOnBlur = ()=>{
        this.setState({
            isFocus:false
        })
    };
    //  获取焦点
    inputOnFocus = ()=> {
        console.log('inputonfocus');
        this.setState({
            isFocus:true
        })
    };

    onClick = ()=> {
        // 直接使用原生 API 使 text 输入框获得焦点
        this.textInput.focus();
    };
    render() {
        const {data} = this.state;
        let onMouseEnter = this.onMouseEnter;
        let onMouseLeave = this.onMouseLeave;
        let {isHover} = this.state;
        let inputOnFocus =this.inputOnFocus;
        let inputOnBlur =this.inputOnBlur;
        let {isFocus} = this.state;
        return (
            <div className="search clearfix" >
                <div className="search-default" style={{display:isFocus?"none":"block"}}>
                    {data.map(item => {
                        return(
                            <a href={item.url} key={item.id} className={item.class}>{item.name}</a>
                        )
                        })
                    }
                </div>
                <div className="search-area" style = {{borderBottom:isFocus?'1px solid red':''}}>
                    <input className="search-input"  onBlur={inputOnBlur} onFocus={inputOnFocus} data-suggest-trigger="suggest-trigger" type="text"
                           autoComplete="off"
                           ref={(input) => { this.textInput = input;}}
                    />
                </div>
                <div className="showhide-search" data-show="no"
                     onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                     style = {{background:isHover||isFocus?'rgba(240, 20, 20, 0.4)':''}}
                >
                    <i className="icon-search" onClick={this.onClick}  style = {{color:isHover||isFocus?'red':''}}/>
                </div>
            </div>

        );
    }
}

export {
    Search
}