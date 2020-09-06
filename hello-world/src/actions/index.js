import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_FILTER,
	SET_TODO_TEXT
} from './actionTypes'
let nextTodoId = 0


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