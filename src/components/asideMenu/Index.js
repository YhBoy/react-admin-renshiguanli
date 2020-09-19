
import React,{ Component, Fragment } from 'react'
import {  Menu } from 'antd';
import { UserOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;
class AsideMenu extends Component{
    constructor(props){
        super()
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
                        <Menu.Item key="0">控制台</Menu.Item>    
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                    </Menu>
            </Fragment>    
        );
    }
}

export default AsideMenu;

