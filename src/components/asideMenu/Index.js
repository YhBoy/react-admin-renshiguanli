
import React,{ Component, Fragment } from 'react'
import {  Menu } from 'antd';
// import { UserOutlined  } from '@ant-design/icons';
import Router from '../../routes/index'
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
class AsideMenu extends Component{
    constructor(props){
        super()
    }
    renderSubMenu=({title,key,child})=>{
        // 这个是有二级菜单的  里面还包括了  判断 二级菜单里面是否还有 child 递归调用一下
        return (
            <SubMenu key={key}  title={title}>
                 {
                    child&&child.map((item)=>{
                        return item.child&&item.child.length > 0 ?  this.renderSubMenu(item) : this.renderMenu(item)
                    }) 
                 }
            </SubMenu>
        )
    }
    renderMenu=(data)=>{
        return (<Menu.Item  key={data.key}> <Link to={data.key}> {data.title} </Link></Menu.Item>)
    }
    render(){
        return (
            <Fragment>
                    
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
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

export default AsideMenu;

