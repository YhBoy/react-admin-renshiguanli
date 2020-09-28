import React,{Component} from 'react'
import './layout.scss'
import { Layout } from 'antd';
import Aside from './components/Aside'

//  主体内容组件
import ContentMain from '../../components/contentMain/index'


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
        return ( <Layout style={{ height:"100vh" }}>
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
              {/* <div className="logo" /> */}
              <Aside />
              
              
            </Sider>
            <Layout >
              <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
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

export default Index;
