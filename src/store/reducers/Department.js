const defaultState = {
    departmentList:[]
}

 export default (state = defaultState,action)=>{
    switch(action.type){
        case 'getList' :{
            return {
                ...state,
                departmentList:action.getData.data
            }
        }
        default:
            return state;
    }
}















