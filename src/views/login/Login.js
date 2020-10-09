import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom'

import { setToken,setUsername } from '../../utils/cookie'

import { Form, Input, Button ,Row,Col,message } from 'antd';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';

// 引入 公用action
import { userInfo } from '../../store/action'

// 引入 react-redux
import { connect }  from "react-redux"

// 加密
import CryptoJs from 'crypto-js'

// 组件
import  Code  from '../../components/Code/index.js' 

import { LoginForm  } from '../../api/account'
class Login extends Component{
    constructor(props){
        super()
        this.state = {
            username:'',
            module:'login',
            password:'',
            code:'',
            loading:false
            // username:'409019683@qq.com',
            // code_button_loading:false,
            // code_button_text:"获取验证码",
            // code_button_disabled:false
        }
    }
   
    onFinish = (values) => {
        console.log(values)
        // const result = {
        //     username:this.state.username,
        //     password:CryptoJs.MD5(this.state.password).toString(),
        //     code:this.state.code
        // }
        const result = {
            username:values.username,
            password: CryptoJs.MD5(values.password).toString(),
            code:values.code
        }
        this.setState({
            loading:true
        })
        
        LoginForm(result).then(res=>{
                message.info(res.data.message)
                this.setState({
                    loading:false
                })
                this.props.saveInfo(res)
                setToken(res.data.data.token)
                setUsername(res.data.data.username)
                this.props.history.push('/index')
                
        }).catch(err=>{
            this.setState({
                loading:false
            })
            console.log(err)
        })
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

    inputPassword = (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    // 处理input 输入事件
    inputChange =(e)=>{
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
        return (<Fragment >
            <div className='form-box'>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>账号注册</span>
                </div>
                <Form onFinish={this.onFinish}   name="normal_login" className="login-form">
                    <Form.Item  name="username" >
                        <Input onChange={this.inputChange} autoComplete="off"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
                    </Form.Item>
                    <Form.Item name="password"  >
                            <Input onChange={this.inputPassword}  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="code"  rules={[{ required: true, message: '请输入验证码' }]} >
                        <Row span={20} >
                            <Col span={14} >
                                <Input onChange={this.inputCode} prefix={<LockOutlined className="site-form-item-icon" />} type="code" placeholder="请输入验证码" />
                            </Col>
                            <Col span={8} offset={2}>
                                <Code user = {this.state.username} module = {this.state.module}></Code>
                            </Col>
                        </Row>    
                    </Form.Item>
                    <Form.Item>
                        <Button loading={this.state.loading} style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>);
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        saveInfo:(res)=>{
            console.log(res)
            dispatch({
                type:"userInfo",
                userInfoData:{
                    username:res.data.data.username,
                    token:res.data.data.token
                }
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Login));
