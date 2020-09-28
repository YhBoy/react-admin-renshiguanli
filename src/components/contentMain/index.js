import React,{Component} from 'react'

import { Switch } from 'react-router-dom'
// 私有路由组件
import PrivateRouter from '../privateRouter/index'

import User from '../../views/user/Index.js'
import UserAdd from '../../views/user/Add.js'

// 部门
import DepartmentList from '../../views/department/List'
import DepartmentAdd from '../../views/department/Add'

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
                <PrivateRouter exact path="/index/department/add"  component = {DepartmentAdd} />
                <PrivateRouter exact path="/index/department/list"  component = {DepartmentList} />
            </Switch>    
        )
    }
}
export default contentMain;

