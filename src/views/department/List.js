
import React,{Component, Fragment} from 'react';

import {Button,Input,Form, Table, Switch, message,Modal} from 'antd';
import { departmentListApi ,departmentDeleteApi ,departmentStatusApi} from "../../api/department"
import { Link } from 'react-router-dom';
import TableComponents from '../../components/tableData/index'

import requestUrl from '../../api/requestUrl'


import { connect } from 'react-redux'

class DepartmentList extends Component{
    constructor(props){
        super()
        this.state = {
            loadingTable:false,
            pageSize:1,
            total:'',
            pageNumber:10,
            // 点击全选  得到的id 数组
            selectedRowKeys:[],
            visible:false,
            keyWork:'',
            id:'',
            flag:false,
            loading:false,
            batchButton:true,
            tableConfig:{
                
                url:requestUrl.departmentList,
                thead:[
                        {title:'部门名称',dataIndex:"name",key:'name'},
                        {title:'禁启用',dataIndex:"status",key:'status',render:(text,row)=>{
                            return <Switch 
                                onChange={ ()=>this.onHandleSwitch(row.id,row.status) }
                                checkedChildren="开启" 
                                unCheckedChildren="关闭" 
                                loading = { this.state.flag  }
                                defaultChecked={row.status == 1 ? true : false}  />
                            }
                        },
                        {title:'人员数量',dataIndex:"number",key:'number'},
                        {title:'操作',dataIndex:"operation",key:'operation',width:230, render:(text,row)=>{
                            return (
                                <div>
                                    <Button  type="primary">
                                        <Link to={{pathname:"/index/department/add",state:{id:row.id}}}>编辑</Link>
                                    </Button>
                                    <Button style={{marginLeft:"10px"}} type="danger" onClick={ ()=> this.onHandleDelete(row.id) }>删除</Button>
                                </div>
                            )
                        } }
                    ],
                },
            dataSource:[]
            
        }
    }
    
    componentWillMount(){
        this.loadData()
        this.props.initData()
    }
    
    onHandleSwitch=(id,status)=>{
        console.log(id,status)
        if(!id ) return ;
        if(this.state.flag){ return }
        this.setState({
            flag:true
        })
        
        const result = {
            id,
            status:status=="1"? false : true
        }
        
        departmentStatusApi(result).then(res=>{
            message.info(res.data.message)
            this.setState({
                flag:false
            })
            this.loadData()
        }).catch(err=>{
            console.log(err)
            this.setState({
                flag:false
            })
        })
    }
    onHandleDelete=(id)=>{
        if(!id) return ;
        this.setState({
            visible:true,
            id
        })
        
    }
    onShowSizeChange=()=>{
        
    }
    
    deleteAll=()=>{
        if( this.state.selectedRowKeys.length <= 0 ){
            message.info('删除元素不能为空')
            return
        }
        const result = {
            id:this.state.selectedRowKeys.join(',')
        }
        
        departmentDeleteApi(result).then(res=>{
            message.info(res.data.message)
            this.loadData()
        }).catch(err=>{
            console.log(err)
        })
        
    }
    loadData=()=>{
        // console.log(typeof (this.state.pageSize))
        // console.log(typeof (this.state.pageNumber))
        const result = {
            pageNumber:1,
            pageSize:10
        }
        this.setState({
            loadingTable:true
        })
        departmentListApi(result).then(res=>{
            if(res.data.data.data.length > 0){
                this.setState({
                    dataSource:res.data.data.data,
                    total:res.data.data.total
                })
            }else{
                this.setState({
                    dataSource:[]
                })
            }
            this.setState({
                loadingTable:false
            })
        }).catch(err=>{
            console.log(err)
            this.setState({
                loadingTable:false
            })
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
    okModal=()=>{
        departmentDeleteApi({id:this.state.id}).then(res=>{
            message.info(res.data.message)
            this.setState({
                visible:false
            })
            this.loadData()
        }).catch(err=>{
            console.log(err)
        })
    }
    hideModal=()=>{
        this.setState({
            visible:false
        })
    }

    

    render(){
        const { columns,total,batchButton } = this.state
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
                <div className="table-wrap">
                    <TableComponents deleteAll={this.deleteAll} batchButton={ batchButton } tableConfig = { this.state.tableConfig } total={total} rowSelection = { rowSelection } columns={this.state.columns} dataSource = {this.state.dataSource}></TableComponents>    
                    {/* <Table loading = {this.state.loadingTable} rowSelection = { rowSelection } rowKey="id" style={{marginTop:"20px"}} columns={columns} dataSource={this.state.dataSource} bordered></Table>        */}
                        
                </div> 
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.okModal}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    >
                    <p>确认删除该数据?</p>
               </Modal> 
            </Fragment>    
        );
    }
}

const mapStateToProps = (state)=>({
    num:state.num,
    text:state.text,
    departmentList:state.departmentList,
    username:state.username,
    token:state.token
})

const mapDispatchToProps =(dispatch)=>{
    return {
        initData:()=>{
            departmentListApi({ pageNumber:1,pageSize:10 }).then(res=>{
                dispatch({
                    type:'getList',
                    getData:{
                        data:res.data.data.data
                    }    
                })
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DepartmentList);

