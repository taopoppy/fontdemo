import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { addTodo, toggleTodo, setFilter, setTodoText} from './actions/index'
const store = createStore(rootReducer)

// 初始State
console.log(store.getState())

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

// 发生action
store.dispatch(addTodo('learn about redux'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('learn'))

// 取消订阅
unsubscribe()

export default store