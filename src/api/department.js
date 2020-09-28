import service from '../utils/request';

// 添加部门
export function departmentAddApi(data){
    return service.request({
        url:'/department/add/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}


export function departmentListApi(data){
    return service.request({
        url:'/department/list/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}

// 删除


export function departmentDeleteApi(data){
    return service.request({
        url:'/department/delete/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}






