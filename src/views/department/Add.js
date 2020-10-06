import React,{Component} from 'react'
import { Button, Form, Input,Radio, message} from 'antd';

import { departmentAddApi ,departmentDetailApi,departmentEditApi} from '../../api/department'

class DepartmentAdd extends Component{
    constructor(props){
        super()
        this.state = {
            FormContent:{
                labelCol:{span:2},
                wrapperCol:{span:14}
            },
            loading:false,
            name:'',
            status:false,
            number:0,
            content:'',
            id:''
        }
    }
    componentDidMount(){
        if( this.props.location.state ){
            this.setState({
                id:this.props.location.state.id
            })
            this.getDetail()
        }
        
    }
    getDetail=()=>{
        const result = {
            id :this.props.location.state.id
        }
        if (!this.props.location.state.id) return
        departmentDetailApi(result).then(res=>{
            const data = res.data.data
            this.refs.myForm.setFieldsValue({
                content: data.content,
                name: data.name,
                number: data.number,
                status: data.status
            })
            
        }).catch(err=>{
            console.log(err)
        })
    }
    onFinish=(value)=>{
        this.state.id ? this.onHandleEdit(value) : this.onHandleAdd(value)
    }

    onHandleAdd=(value)=>{
        this.setState({
            loading:true
        })
        departmentAddApi(value).then(res=>{
            message.info("添加成功")
            this.setState({
                loading:false
            })
            this.refs.myForm.resetFields();
         }).catch(err=>{
             console.log(err)
             this.setState({
                loading:false
            })
         })
    }

    onHandleEdit=(value)=>{
        const result = value
        result.id = this.props.location.state.id
        departmentEditApi(value).then(res=>{
            message.info(res.data.message)
        }).catch(err=>{
            console.log(err)
        })
    }
   
    render(){
        return (
                <Form ref="myForm" initialValues={{ status:false }} 
                    onFinish={this.onFinish} 
                    labelCol={this.state.FormContent.labelCol}  
                    wrapperCol={this.state.FormContent.wrapperCol}>
                    <Form.Item label="部门名称" name="name"
                            rules={[
                                {
                                  required: true,
                                  message: '请输入部门名称',
                                },
                                ({ getFieldValue }) => ({
                                  validator(rule, value) {
                                    if (value === "") {
                                        return Promise.reject('部门名称不能为空');
                                    }else{
                                        return Promise.resolve();
                                    }
                                  },
                                }),
                            ]}
                        >
                        <Input onChange={this.departmentName} />
                    </Form.Item>
                    <Form.Item label="人员数量" name="number" 
                            rules={[
                                {
                                  required: true,
                                  message: '请输入人员数量',
                                },
                                ({ getFieldValue }) => ({
                                  validator(rule, value) {
                                    if (value === "") {
                                        return Promise.reject('人员数量不能为空');
                                    }else{
                                        return Promise.resolve();
                                    }
                                  },
                                }),
                            ]}
                        >
                        <Input onChange={this.departmentNumber} />
                    </Form.Item>
                    <Form.Item label="禁启用" name="status">
                        <Radio.Group onChange={this.departmentCheck} >
                            <Radio value={true}>禁用</Radio>
                            <Radio value={false}>启用</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="描述" name="content" 
                            rules={[
                                {
                                  required: true,
                                  message: '请输入描述内容',
                                },
                                ({ getFieldValue }) => ({
                                  validator(rule, value) {
                                    if (value === "") {
                                        return Promise.reject('描述内容不能为空');
                                    }else{
                                        return Promise.resolve();
                                    }
                                  },
                                }),
                            ]}
                        >
                        <Input.TextArea onChange={this.departmentDesc} />
                    </Form.Item>
                    <Form.Item >
                        <Button loading={this.state.loading} htmlType="submit" type="primary">提交</Button>
                    </Form.Item>
                </Form>    
        )
    }
}

export default DepartmentAdd;