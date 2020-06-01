import { createStore,compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware)
);


// 创建一个公共管理仓库store，参数为reducer
const store = createStore(
	reducer,
	enhancer
)

sagaMiddleware.run(sagas)

export default store