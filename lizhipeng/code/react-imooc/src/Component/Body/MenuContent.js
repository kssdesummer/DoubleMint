import React ,{Component} from 'react'

const menuData = ['前沿 / 区块链 / 人工智能','前端 / 小程序 / JS','后端 / JAVA / Python','移动 / Android / iOS','云计算 / 大数据 / 容器','运维 / 测试 / 数据库','UI设计 / 3D动画 / 游戏']

const menu = menuData.map((data)=>{
    return(
        <div className="item" data-id="a">
            <a href="https://www.imooc.com/">
                <span className="group">{data}</span>
                <i className="imv2-arrow1_r"></i>
            </a>
        </div>
    )
})  

class MenuContent extends Component {
    render(){
        return(
            <div className = 'menuContent'>
                {menu}
            </div>
        )
    }
}

export default MenuContent