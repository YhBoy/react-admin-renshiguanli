import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './styles/main.scss';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Login from './views/login/Index'
import Index from './views/index/Index'


// 引入私有组件
import PrivateRouter from "./components/privateRouter/index";


// 引入store
import store from './store/index'

// 引入全局状态管理
import { Provider } from 'react-redux'


class App extends Component{
    constructor(){
      super()
      this.state = {}
    }
    render(){
      return (
          <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  render={()=> <Login />} ></Route>
                    <PrivateRouter path="/index" component = {Index} />
                </Switch>
            </BrowserRouter> 
          </Provider> 
      )
    }
}
export default App;
