import { call, put, take } from 'redux-saga/effects'
import {getGitHubList} from "../api/index"

//获取数据的action
const setGitHubDataList = (data) =>({
    type:"getList",
    data
})

const clearGitHubDataList = () =>({
    type:"clearList"
})

function *getGitHubDataListAsync(){
    while(true){
        const action = yield take('setGitHubDataListSaga');
        yield put(clearGitHubDataList())
        const res = yield call(()=>getGitHubList(action.url))
        yield put(setGitHubDataList(res.data.items))
    }
}

export default getGitHubDataListAsync