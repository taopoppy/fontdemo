import { createStore,applyMiddleware,compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

// 创建一个公共管理仓库store，参数为reducer
const store = createStore(
	reducer,
	enhancer
)

export default store