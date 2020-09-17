import service from '../utils/request';

// 登录接口

export function LoginForm(data){
    return service.request({
        url:'/login',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}






