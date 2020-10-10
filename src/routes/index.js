import React from 'react'
import {
    LeftSquareTwoTone,
    EditTwoTone,
    DeleteTwoTone,
    FundTwoTone
} from '@ant-design/icons';
const router = [
    {
        title:"控制台",
        icon:<LeftSquareTwoTone />,
        key:'/index'
    },
    {
        title:'用户管理',
        icon:<DeleteTwoTone />,
        key:'/index/user',
        child:[
            {
                key:'/index/user/list',
                title:"用户列表",
                icon:''
            },
            {
                key:'/index/user/add',
                title:"添加用户",
                icon:''
            }
        ]
    },
    {
        title:'部门管理',
        icon:<FundTwoTone />,
        key:'/index/department',
        child:[
            {title:'部门列表',icon:'',key:'/index/department/list'},
            {title:'添加部门',icon:'',key:'/index/department/add',}
        ]
    },
    {
        title:"职位管理",
        icon:<EditTwoTone />,
        key:'/home/entry',
        child:[
            {
                title:"职位列表",
                icon:'',
                key:'/home/entry/form/basic-from',
            },
            {
                title:"添加职位",
                icon:'',
                key:'/home/entry/form/step-form',
            }
        ]
    },
    {
        title:'请假',
        icon:<EditTwoTone />,
        key:'/home/about',
    },
    {
        title:'加班',
        icon:<EditTwoTone />,
        key:'/home/about1',
    }
]

export default router







