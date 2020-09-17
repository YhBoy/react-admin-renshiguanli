import React, { Component, Fragment } from 'react';
import { Form, Input, Button ,Row,Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginForm } from '../../api/account'
class Login extends Component{
    constructor(props){
        super()
        this.state = {}
    }
   
    onFinish = values => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
                LoginForm().then(res=>{
                        console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        });

    }
    toggleForm =()=>{
        this.props.switchForm('resisterForm')
    }
    passwordValidator =( rule, value, callback )=>{
        if (value === '') {
            callback('密码不能为空')
        }else{
            callback();
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (<Fragment >
            <div className='form-box'>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>账号注册</span>
                </div>
                <Form onClick={this.onFinish}  name="normal_login" className="login-form">
                    <Form.Item name="username"  >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '用户名不能为空' }],
                        })(
                            <Input autoComplete="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
                        )}
                    </Form.Item>
                    <Form.Item name="password"  >
                            {getFieldDecorator('passwordcomfire', {
                                rules: [{
                                required: true,
                                message: '密码不能为空',
                            }, {validator: this.passwordValidator
                            }],
                            })(
                                <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            )}
                    </Form.Item>
                    <Form.Item name="code"  rules={[{ required: true, message: '请输入验证码' }]} >
                        <Row span={20} >
                            <Col span={14} >
                            {getFieldDecorator('code', {
                                rules: [{
                                required: true,
                                message: '验证码不能为空',
                            }],
                            })(
                                <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="code" placeholder="请输入验证码" />
                            )} 
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

export default Form.create({})(Login);
