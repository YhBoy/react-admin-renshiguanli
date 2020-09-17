import React, { Component, Fragment } from 'react';
import { Form, Input, Button ,Row,Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
class RegisterForm extends Component{
    constructor(props){
        super()
        this.state = {}
    }
   
     onFinish = values => {
        console.log('Received values of form: ', values);
    }
    toggleForm = ()=>{
        this.props.switchForm('login')
    }
    render(){
    return (<Fragment >
        <div className='form-box'>
            <div className="form-header">
                <h4 className="column">注册</h4>
                <span onClick={this.toggleForm}>账号登录</span>
            </div>
            <Form onClick={this.onFinish}  name="normal_login" className="login-form"    >
                        <Form.Item name="username"  rules={[{ required: true, message: 'Please input your Username!' }]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password!' }]} >
                            <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="code"  rules={[{ required: true, message: '请输入验证码' }]} >
                            <Row span={20} >
                                <Col span={14} >
                                    <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="code" placeholder="请输入验证码" />
                                </Col>
                                <Col span={8} offset={2}>
                                    <Button type="danger">获取验证码</Button>
                                </Col>
                            </Row>    
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                    </Form>
        </div>
    </Fragment>);
    }
}

export default RegisterForm;
