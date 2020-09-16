import React from 'react'
import  { withRouter } from 'react-router-dom'
import Logo from './result.png'
import { adminRoutes } from '../../routes/index'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
let { Header, Content, Sider } = Layout;
let { SubMenu } = Menu;


let route = adminRoutes.filter(item=>item.isShow)



function Index(props) {
    return (
        <Layout>
    <Header className="header">
      <div className="logo" >
            <img style={{width:'150px'}} src={Logo} />
      </div>    
      
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu> */}
          {route.map((route)=>{
              return (<Menu.Item key={route.path} onClick = { p=> props.history.push(p.key)  } > <Icon type={route.icon} /> {route.title}</Menu.Item>)
          })}
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(Index)








