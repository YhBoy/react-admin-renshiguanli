import React from 'react';
import { Route,Redirect } from 'react-router-dom'

import { getToken } from '../../utils/cookie'

const PrivateRouter = ({ component: Component, ...rest }) => {
  console.log(rest) //   这个代表当前路由的 title  url icon 等等信息
  return (
    <Route {...rest} render={routeProps => (

        // console.log( Component )
        // 这个就是 从父组件传递过来的 component 也就是 里面的 {Index }  <PrivateRouter path="/index" component = {Index} />
        // <Component {...routeProps} />  所以这个可以分解成 
        // <Index path={} url={}  key={} />  

        // console.log(routeProps)
        // history: {length: 3, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
        // location: {pathname: "/index", search: "", hash: "", state: undefined, key: "ggmw6s"}
        // match: {path: "/index", url: "/index", isExact: true, params: {…}}
        // staticContext: undefined
        // __proto__: Object

        // console.log(rest)  // 
        // computedMatch: {path: "/index", url: "/index", isExact: true, params: {…}}
        // location: {pathname: "/index", search: "", hash: "", state: undefined, key: "ggmw6s"}
        // path: "/index"
        // __proto__: Object

          getToken() ? <Component {...routeProps} /> : <Redirect to="/" />
        
        )} />
  );
}

export default PrivateRouter;





