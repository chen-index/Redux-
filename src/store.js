import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootRedurers from './reducers'

const store = createStore(
  rootRedurers,
  compose(
    applyMiddleware(...[thunk]), // 需要的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) // 创建一个store

export default store
