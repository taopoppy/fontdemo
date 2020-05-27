import { createStore } from 'redux'
import reducer from './reducer'

// 创建一个公共管理仓库store，参数为reducer
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store