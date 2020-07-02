
//处理状态
const gitHubList = (state={list:[]},action) =>{
    switch(action.type){
        case "getList":
            console.log(action.data);
            
            state.list = [...state.list,...action.data]
            return {...state}
        case "clearList":
            state.list = []
            return {...state}
        default:
            return state
    }
}   

export default gitHubList