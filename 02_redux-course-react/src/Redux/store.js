import {createStore,compose, bindActionCreators}  from "redux"
import { decrement, increment, set } from "./actions"
import { reducer } from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer,composeEnhancers)
export const actions = bindActionCreators({increment,decrement,set},store.dispatch)