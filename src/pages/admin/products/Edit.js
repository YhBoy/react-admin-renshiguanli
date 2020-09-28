import React from 'react'
import {Card,Form, Input,Button,message} from 'antd'

function Edit(props) {
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
                <Form.Item label="姓名" name="username">
                    <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input placeholder="请输入密码" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit
