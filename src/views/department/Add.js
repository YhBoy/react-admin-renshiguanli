import React,{Component} from 'react'
import { Button, Form, Input,Radio, message} from 'antd';

import { departmentAddApi } from '../../api/department'

class DepartmentAdd extends Component{
    constructor(props){
        super()
        this.state = {
            FormContent:{
                labelCol:{span:2},
                wrapperCol:{span:14}
            },
            name:'',
            status:false,
            number:0,
            content:''
        }
    }
    onFinish=(e)=>{
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const result = {
                    name:this.state.name,
                    status:this.state.status,
                    content:this.state.content,
                    number:this.state.number,
                }
                departmentAddApi(result).then(res=>{
                    message.info("添加成功")
                 }).catch(err=>{
                     console.log(err)
                 })
                
            }
        });
       
    }
    onFinish=(values)=>{
            console.log(values)
    }
    departmentName= (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    departmentNumber=(e)=>{
        this.setState({
            number:e.target.value
        })
    }
    departmentCheck=(e)=>{
        this.setState({
            status:!this.state.status
        })
    }
    departmentDesc=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    render(){
        return (
           
                <Form onSubmit={this.onFinish} labelCol={this.state.FormContent.labelCol}  wrapperCol={this.state.FormContent.wrapperCol}>
                    <Form.Item label="部门名称" name="name">
                        <Input onChange={this.departmentName} />
                    </Form.Item>
                    <Form.Item label="人员数量" name="number">
                        <Input onChange={this.departmentNumber} />
                    </Form.Item>
                    <Form.Item label="禁启用" name="status">
                        <Radio.Group onChange={this.departmentCheck} value={this.state.status}>
                            <Radio value={true}>禁用</Radio>
                            <Radio value={false}>启用</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="描述" name="content">
                        <Input.TextArea onChange={this.departmentDesc} />
                    </Form.Item>
                    <Form.Item >
                        <Button htmlType="submit" type="primary">提交</Button>
                    </Form.Item>
                </Form>    
           
        )
    }
}

export default Form.create()(DepartmentAdd);