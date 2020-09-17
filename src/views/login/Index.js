import React, { Component } from 'react';

import Login from './Login'
import RegisterForm from './RegisterForm'
import './index.scss';

class Index extends Component{
    constructor(props){
        super()
        this.state = {
            formType:'login'
        }
    }
    switchForm =(value)=>{
        this.setState({
            formType:value
        })
    }
    
    render(){ 
            return (<div>
                        {this.state.formType === 'login' ? <Login  switchForm={this.switchForm} /> : <RegisterForm  switchForm={this.switchForm} />}
                    </div>);
    }
}

export default Index;
