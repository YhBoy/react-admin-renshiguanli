import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './styles/main.scss';
import { HashRouter,Switch,Route } from 'react-router-dom'
import Index from './views/login/Index'


class App extends Component{
    constructor(){
      super()
      this.state = {}
    }
    render(){
      return (
        <div className="test">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component = {Index}></Route>
                    
                </Switch>
            </HashRouter>  
        </div>  
      )
    }
}
export default App;
