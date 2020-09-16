// 路由分为两类
import Login from '../pages/Login';
import List from '../pages/admin/products/List'

import PageNotFound from '../pages/PageNotFound'
import Edit from '../pages/admin/products/Edit'
import Index from '../pages/admin/dashboard/index'
export const mainRoutes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/404',
        component:PageNotFound
    }
]

export const adminRoutes = [
    {
        path:'/admin/dashboard',
        component:Index,
        title:'看板',
        isShow:true,
        icon:'<AreaChartOutlined />'
    },
    {
        path:'/admin/products',
        component:List,
        title:'商品管理',
        isShow:true,
        icon:'shop'
    },
    {
        path:'/admin/products/edit/:id?',
        component:Edit,
        title:'商品编辑',
        isShow:true
    }
]










