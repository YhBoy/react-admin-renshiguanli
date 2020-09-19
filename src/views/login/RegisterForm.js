import React, { Component, Fragment } from 'react';
import { Form, Input, Button ,Row,Col,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import  Code  from '../../components/Code/index.js'

// 加密
import CryptoJs from 'crypto-js'

import { register  } from '../../api/account'
import './index.scss';
class RegisterForm extends Component{
    constructor(props){
        super()
        this.state = { 
            module:'register',
            username:props.user,
            code_button_loading:false,
            code_button_text:"获取验证码",
            code_button_disabled:false,
            password:'',
            code:'',
            formType:'login'
        }
    }
   
     onFinish = values => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const result = {
                    username:this.state.username,
                    password:CryptoJs.MD5(this.state.password).toString(),
                    code:this.state.code
                }
                register(result).then(res=>{
                    console.log(res)
                    message.info("注册成功,即将跳转到登录页")
                    setTimeout(()=>{
                        this.props.switchForm('login')
                    },3000)
                    
                }).catch(err=>{
                    console.log(err)
                })
            }
        });
    }
    toggleForm = ()=>{
        this.props.switchForm('login')
    }
   
    passwordValidator=( rule, value, callback  )=>{
        if( value === ''){
            callback('密码不能为空')
        }else if( value.length <= 3 ){
            callback('密码长度必须大于3位')
        }else {
            callback()
        }
    }
    // passwordAgainValidator=( rule, value, callback )=>{
        
    //     if( value === ''){
    //         callback('密码不能为空')
    //     }else if( value.length <= 3 ){
    //         callback('密码长度必须大于3位')
    //     }else if( this.state.password !== this.state.passwords ){
    //         callback('两次输入密码不一样')
    //     }else {
    //         callback()
    //     }
    // }
    // inputPasswords=(e)=>{
    //     console.log(e.target.value)
    //     this.setState({
    //         passwords:e.target.value
    //     })
    // }
    inputPassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    inputUsername=(e)=>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    inputCode=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
    return (<Fragment >
        <div className='form-box'>
            <div className="form-header">
                <h4 className="column">注册</h4>
                <span onClick={this.toggleForm}>账号登录</span>
            </div>
            <Form onSubmit={this.onFinish}  name="normal_login" className="login-form"    >
                        <Form.Item   >
                            {getFieldDecorator('username', {
                                    rules: [{
                                    required: true,
                                    message: '用户名不能为空',
                                }],
                            })(
                                <Input onChange={this.inputUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                            )}
                        </Form.Item>
                        <Form.Item   >
                            {getFieldDecorator('password', {
                                    initialValue:this.state.password,
                                    rules: [{
                                    required: true
                                }, {validator: this.passwordValidator
                                }],
                            })(
                                <Input onChange={this.inputPassword}  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" />
                            )}
                        </Form.Item>
                        {/* <Form.Item    >
                            {getFieldDecorator('passwords', {
                                    initialValue:this.state.passwords,
                                    rules: [{
                                    required: true
                                }, {validator: this.passwordAgainValidator
                                }],
                            })(
                                <Input onChange={this.inputPasswords}  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请在此输入密码" />
                            )}
                            
                        </Form.Item> */}
                        <Form.Item name="code"  rules={[{ required: true, message: '请输入验证码' }]} >
                            <Row span={20} >
                                <Col span={14} >
                                    <Input onChange={this.inputCode}  prefix={<LockOutlined className="site-form-item-icon" />} type="code" placeholder="请输入验证码" />
                                </Col>
                                <Col span={8} offset={2}>
                                    <Code user={this.state.username}  module={this.state.module} ></Code>
                                </Col>
                            </Row>    
                        </Form.Item>
                        <Form.Item>
                            <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                    </Form>
        </div>
    </Fragment>);
    }
}

export default Form.create({})(RegisterForm);
