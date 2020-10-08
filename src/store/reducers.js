const defaultState = {
    num:0,
    text:'我是哈哈哈',
    departmentList:[],
    token:'',
    username:''
}

export default (state = defaultState,action)=>{
    
    switch(action.type){
        case 'getList' :{
            return {
                ...state,
                departmentList:action.getData.data
            }
        }
        case "userInfo" :{
            return {
                ...state,
                token:action.token,
                username:action.username
            }
        }
        default:
            return state;
    }
}