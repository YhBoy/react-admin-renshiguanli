import React, { Component } from 'react';
import { message ,Button} from 'antd';
import {  GetCode } from '../../api/account';
let timer = null;  
class Code extends Component{
    constructor(props){
        super(props)
        this.state = {
            // username:'409019683@qq.com',
            username:props.user,
            code_button_loading:false,
            code_button_text:"获取验证码",
            code_button_disabled:false
        }
    }
    componentWillReceiveProps(value){
        
        this.setState({
            username:value.user
        })
        console.log(this.state.username)
    }

    // 销毁组件
    componentWillUnmount(){
        clearInterval(timer)
    }

    getCode=()=>{
            console.log(this.props.user)
        if(  !this.props.user ){
                message.warning('请输入用户名')
                return;
        }
        const myreg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        if (!myreg.test(this.props.user)) {
            message.warning('用户名输入有误')
            return ;
        }
        this.setState({
            code_button_loading:true,
            code_button_text:'获取中'
        })
        const resultData = {
            username:this.props.user,
            module:this.props.module
        }
        console.log( this.state.username, this.props.module)
        
        GetCode(resultData).then(res=>{
            message.info(res.data.message)
            // 倒计时函数
            this.countDown()
        }).catch(err=>{
            this.setState({
                code_button_loading:false,
                code_button_text:'重新获取'
            })
            console.log('获取失败')
        })
    }

    
    countDown =()=>{   // 倒计时函数
        
        let sec = 60 
        this.setState({
            code_button_loading:false,
            code_button_disabled:true,
            code_button_text:`${sec}S`
        })
        timer = setInterval(()=>{
            sec--
            if(sec < 0){
                this.setState({
                    code_button_loading:false,
                    code_button_disabled:false,
                    code_button_text:'重新获取'
                })
                clearInterval(timer)
            }else{
                this.setState({
                    code_button_loading:false,
                    code_button_disabled:true,
                    code_button_text:`${sec}S`
                })
            }
        },1000)
    }

    render(){
        return (
            <Button style={{width:"100%"}} loading={this.state.code_button_loading} disabled={this.state.code_button_disabled}  onClick={this.getCode} type="danger">{this.state.code_button_text}</Button>
        );
    }

}

export default Code;

