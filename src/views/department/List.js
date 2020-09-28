
import React,{Component, Fragment} from 'react';

import {Button,Input,Form, Table, Switch} from 'antd';
import { departmentListApi } from "../../api/department"

class DepartmentList extends Component{
    constructor(props){
        super()
        this.state = {
            pageSize:1,
            pageNumber:10,
            // 点击全选  得到的id 数组
            selectedRowKeys:[],
            keyWork:'',
            columns:[
                {title:'部门名称',dataIndex:"name",key:'name'},
                {title:'禁启用',dataIndex:"status",key:'status',render(text,row) {
                    return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={row.status === 1 ? true : false}  />
                },},
                {title:'人员数量',dataIndex:"number",key:'number'},
                {title:'操作',dataIndex:"operation",key:'operation',width:230,render(text,rowData) {
                    return (
                        <div>
                            <Button onClick={ ()=>this.handleEdit(rowData.id) } type="primary">编辑</Button>
                            <Button >删除</Button>
                        </div>
                    )
                }}
            ],
            dataSource:[]
        }
    }
    
    componentWillMount(){
        this.loadData()
    }
    handleEdit=(id)=>{
        console.log(id)
    }
    handleDelete=()=>{
        console.log(111)
    }
    loadData=()=>{
        // console.log(typeof (this.state.pageSize))
        // console.log(typeof (this.state.pageNumber))
        const result = {
            pageNumber:1,
            pageSize:10
        }
        departmentListApi(result).then(res=>{
            if(res.data.data.data.length > 0){
                this.setState({
                    dataSource:res.data.data.data
                })
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }
    onFinish=(value)=>{
        const result = {
            pageNumber:2,
            pageSize:10,
            name:value.username
        }
        
        departmentListApi(result).then(res=>{
            
            if(res.data.data.data.length > 0){
                this.setState({
                    dataSource:res.data.data.data
                })
            }
            
        }).catch(err=>{
            console.log(err)
        })
        
    }
    
    checkAllBox=(row)=>{
        this.setState({
            selectedRowKeys:row
        })
    }
    render(){
        const { columns } = this.state
        const rowSelection = {
            onChange:this.checkAllBox
        }
        return(
            <Fragment>
                <Form  layout="inline" onFinish={this.onFinish}>
                    <Form.Item
                        label="部门名称"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '部门名称不能为空',
                            }
                        ]}
                    >
                        <Input  placeholder="请输入部门名称" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                    
                </Form> 
                <Table rowSelection = { rowSelection } rowKey="id" style={{marginTop:"20px"}} columns={columns} dataSource={this.state.dataSource} bordered></Table>       
            </Fragment>    
        );
    }
}

export default DepartmentList;

