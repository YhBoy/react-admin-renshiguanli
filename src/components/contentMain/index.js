import React,{Component} from 'react'
import User from '../../views/user/Index.js'
import UserAdd from '../../views/user/Add.js'
import { Switch } from 'react-router-dom'
// 私有路由组件
import PrivateRouter from '../privateRouter/index'

class  contentMain extends Component {
    constructor(props){
        super()
        this.state = {}
    }
    render(){
        return (
            <Switch>
                <PrivateRouter exact path="/index/user/list" component = {User} />
                <PrivateRouter exact path="/index/user/add"  component = {UserAdd} />
            </Switch>    
        )
    }
}
export default contentMain;

