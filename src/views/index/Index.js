import React,{Component} from 'react'
import './layout.scss'
import { Layout } from 'antd';
import Aside from './components/Aside'
const { Header, Content, Footer, Sider } = Layout;

class Index extends Component{
    constructor(props){
        super()
        this.state={
            collapsed:true
        }
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return ( <Layout>
            <Sider 
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="logo" />
              <Aside />
              
              
            </Sider>
            <Layout>
              <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
              <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  content
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>)
    }
}

export default Index;
