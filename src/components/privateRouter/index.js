import React from 'react';
import { Route,Redirect } from 'react-router-dom'

import { getToken } from '../../utils/session'

const privateRouter = ({ component: Component, ...rest }) => (
    // Component 从父组件传递过来的 组件名称 
    // ...rest接收组件的属性   如 path  key 
    <Route {...rest} render={props => (
        getToken()?<Component {...props}/>:<Redirect to="/" />
    )}/>
  )

export default privateRouter;