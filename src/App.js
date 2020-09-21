import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './styles/main.scss';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Login from './views/login/Index'
import Index from './views/index/Index'

// 引入私有组件
import PrivateRouter from "./components/privateRouter/index";

class App extends Component{
    constructor(){
      super()
      this.state = {}
    }
    render(){
      return (
          <BrowserRouter>
              <Switch>
                  <Route exact path="/"  render={()=> <Login />} ></Route>
                  <PrivateRouter path="/index" component = {Index} />
              </Switch>
          </BrowserRouter>  
      )
    }
}
export default App;
