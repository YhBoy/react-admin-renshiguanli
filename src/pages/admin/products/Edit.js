import React from 'react'
import {Card,Form, Input,Button,message} from 'antd'

function Edit(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e =>{
        console.log(e)
        e.preventDefault()
        props.form.validateFields((err,fieldsValue)=>{
            if(err){
                message.error('请输入正确的内容');
                return
            }
            console.log(fieldsValue)
        })
    }
    return (
        <Card title="商品编辑">
            <Form onSubmit = {e=>{ handleSubmit(e) }}>
                <Form.Item label="姓名">
                    {getFieldDecorator('username', {
                            rules: [{ required: true, message: '姓名不能为空' }],
                    })(<Input placeholder="请输入姓名" />)}
                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不能为空' }],
                    })(<Input placeholder="请输入密码" />)}
                    
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({name:'productEdit'})(Edit)
