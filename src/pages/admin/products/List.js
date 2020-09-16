import React from 'react'
import { Card,Table, Button ,Popconfirm} from 'antd'

function List(props) {
    const dataSource = [
        {
            id:1,
            name:'香皂',
            price:5
        },
        {
            id:2,
            name:'手表',
            price:10
        },
        {
            id:3,
            name:'酸奶',
            price:1
        }
    ]
    const columns = [
        {
            title:'序号',
            key:'id',
            width:80,
            align:'center',
            render(txt,row,index) {
                return index+1
            },
        },
        {
            title:'名字',
            dataIndex:'name'
        },
        {
            title:'价格',
            dataIndex:'price'
        },
        {
            title:'操作',
            render(txt,row,index) {
                return (<div>
                    <Button type="primary" size="small">修改</Button>
                    <Popconfirm placement="top" title="确定删除？" onConfirm={()=>{console.log('用户确认删除')}} okText="确认" cancelText="取消">
                        <Button style={{marginLeft:'20px'}} type="danger" size="small">删除</Button>
                    </Popconfirm>
                </div>)
            },
        }
    ]
    return (
        <Card title="商品列表"
            extra = {
                <Button type="primary" size="small" onClick = {()=>{props.history.push("/admin/products/edit")}}>新增</Button>
            }
            
        >
            <Table bordered columns={columns} dataSource = { dataSource} />
        </Card>
    )
}

export default List

