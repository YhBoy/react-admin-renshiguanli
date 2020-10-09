import React,{Component} from 'react'
import './layout.scss'
import { Button, Layout } from 'antd';
import Aside from './components/Aside'

//  主体内容组件
import ContentMain from '../../components/contentMain/index'

import { connect } from "react-redux"

import { UnorderedListOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class Index extends Component{
    constructor(props){
        super()
        this.state={
            collapsed:true
        }
    }
    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    };
    render(){
        return ( <Layout style={{ height:"100vh" }}>
            <Sider 
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              inlineCollapsed = { this.state.collapsed }
            >
              <Aside />
            </Sider>
            <Layout >
              <Header className="site-layout-sub-header-background" style={{ padding: 0 ,backgroundColor:'#fff'}} >
                  <Button onClick={this.toggleCollapsed }>
                      <UnorderedListOutlined />
                  </Button>  
              </Header>  
              <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
                   <ContentMain />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>底部导航...</Footer>
            </Layout>
          </Layout>)
    }
}

const mapStateToProps = (state)=>({
    username:state.username
})

export default connect(mapStateToProps,null)(Index);
