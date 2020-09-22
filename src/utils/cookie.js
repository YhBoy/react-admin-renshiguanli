import cookies from 'js-cookie'

// 存储cookie
export function setToken(value){
    cookies.set('adminToken',value)
}

export function setUsername(value){
   return  cookies.set('username',value)
}


// 获取 

export function getToken(){
    return cookies.get('adminToken')
}

export function getUsername(){
    return cookies.get('username')
}