import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'

import { HashRouter,Switch,Route } from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'

class App extends Component{
    constructor(){
      super()
      this.state = {}
    }
    render(){
      return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component = {Home}></Route>
                <Route path="/about" component = {About}></Route>
            </Switch>
        </HashRouter>  
      )
    }
}
export default App;
