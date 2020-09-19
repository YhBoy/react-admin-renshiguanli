import service from '../utils/request';

// 登录接口

export function LoginForm(data){
    return service.request({
        url:'/login/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}

// 获取验证码


export function GetCode(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}


//  注册 
export function register(data){
    return service.request({
        url:'/register/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}

