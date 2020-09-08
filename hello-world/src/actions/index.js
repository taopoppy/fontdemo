import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_FILTER,
	SET_TODO_TEXT,
	FETTH_TODOS_REQUEST,
	FETTH_TODOS_SUCCESS,
	FETTH_TODOS_FAILURE
} from './actionTypes'
let nextTodoId = 0


const fetchTodosRequest = () => ({
	type: FETTH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
	type: FETTH_TODOS_SUCCESS,
	data
})

const fetchTodosFailure = (error) => ({
	type: FETTH_TODOS_FAILURE,
	error
})

// 请求数据的异步Action
export const fetchTodos = () => {
	return (dispatch) => {
		dispatch(fetchTodosRequest())
		return fetch("./mock/todos.json").then(
			response => {
				response.json().then(data => {
					dispatch(fetchTodosSuccess(data))
				})
			},
			error => {
				dispatch(fetchTodosFailure(error))
				console.log("An error occurred" + error)
			}
		)
	}
}


/**
 * 新增代办事项
 * @param {string} text 待办内容
 */
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	}
}


/**
 * 更改某个id为id的待办事项状态
 * @param {int} id id值
 */
export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id
	}
}


/**
 * 设置过滤状态
 * @param {string} filter 切换状态
 */
export const setFilter = (filter) => {
	return {
		type: SET_FILTER,
		filter
	}
}

/**
 * 设置新增待办事项的文本
 * @param {string} text 输入框中的内容
 */
export const setTodoText = text => {
	return {
		type: SET_TODO_TEXT,
		text
	}
}