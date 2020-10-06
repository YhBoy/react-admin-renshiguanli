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


// 禁启用

export function departmentStatusApi(data){
    return service.request({
        url:'/department/status/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}

// 详情


export function departmentDetailApi(data){
    return service.request({
        url:'/department/detailed/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}


// 修改
export function departmentEditApi(data){
    return service.request({
        url:'/department/edit/',
        method:'post',
        data // post 请求参数
        // params:data // get 请求参数
    })
}



