import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middlewares/logger'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware,loggerMiddleware),
);

const store = createStore(rootReducer,enhancer)


export default store

// import { createStore,applyMiddleware,compose } from 'redux'
// import rootReducer from './reducers/index'
// import thunkMiddleware from 'redux-thunk'
// import loggerMiddleware from './middlewares/logger'
// import loggerEnhancer from './enhancers/logger'

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunkMiddleware,loggerMiddleware),loggerEnhancer
// );

// const store = createStore(rootReducer,enhancer)


// export default store