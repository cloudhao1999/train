import reducer from "./reducer"
import createSagaMiddleware from "redux-saga";
import {createStore,applyMiddleware} from "redux"
import getGitHubDataListAsync from "../redux/saga"


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getGitHubDataListAsync);