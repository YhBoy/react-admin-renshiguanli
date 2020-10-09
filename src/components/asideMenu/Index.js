
import React,{ Component, Fragment } from 'react'
import {  Menu } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import Router from '../../routes/index'
import {Link, withRouter} from 'react-router-dom';

const { SubMenu } = Menu;
class AsideMenu extends Component{
    constructor(props){
        super()
        this.state = {
            selectedKeys:[],  // 在加载完成之后 重新获取当前路径 并且赋值给 defaultSelectedKeys
            openKeys:[] // 默认选中的父级展开 
        }
    }
    componentWillMount(){
        const pathname = this.props.history.location.pathname
        const menuKey = pathname.split("/").splice(0,3).join('/') // 步骤拆解开 查看每部打印的是什么东西
        this.setState({
            selectedKeys : [pathname],
            openKeys:[menuKey]
        })
        const menuHigh = {
            selectedKeys : [pathname],
            openKeys:[menuKey]
        }
        this.selectMenuHigh(menuHigh)
        
    }


    // 点击菜单 得到当前路径和当前父级路径  然后显示高亮和父级打开  (antd Menu 菜单有一个onclick 方法)
    // 用到的时候分别打印出参数  （item 包含了所有  只需要打印一个 item即可）
    selectMenu = (item)=>{ 
        const len = item.keyPath.length - 1
        console.log(item)
        const menuHigh = {
            selectedKeys : [item.key],
            openKeys:[item.keyPath[len]]
        }
        // this.setState({
        //     selectedKeys : [item.key],
        //     openKeys:[item.keyPath[len]]
        // })
        this.selectMenuHigh(menuHigh)
    }

    // 菜单高光
    selectMenuHigh=(item)=>{ // 菜单切换 高光 有一个 onSelect的方法 
        const len = item.selectedKeys
        this.setState = {
            selectedKeys : [item.key],
            openKeys:len
        }
    }

    renderSubMenu=({title,key,child,icon})=>{
        // 这个是有二级菜单的  里面还包括了  判断 二级菜单里面是否还有 child 递归调用一下
        return (
            <SubMenu key={key} icon= {icon}  title={title}>
                {
                    child&&child.map((item)=>{
                        
                        return item.child&&item.child.length > 0 ?  this.renderSubMenu(item) : this.renderMenu(item)
                    }) 
                }
            </SubMenu> 
        )
    }
    renderMenu=(data)=>{
        return (<Menu.Item   key={data.key} icon={ data.icon}> <Link to={data.key}>    {data.title} </Link></Menu.Item>)
    }
    render(){
        const { selectedKeys , openKeys } = this.state
        
        return (
            <Fragment>
                    <Menu
                        onClick={this.selectMenu}
                        onSelect={this.selectMenuHigh}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={selectedKeys} // 默认选中
                        defaultOpenKeys={openKeys} // 默认打开
                        style={{ height: '100%' }}
                    >
                        {
                            Router&&Router.map((firstItem)=>{
                                return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                                //  firstItem.child && firstItem.child.length 存在且大于0 说明有子级否则没有
                            })
                        }
                    </Menu>
            </Fragment>    
        );
    }
}

export default withRouter(AsideMenu);

