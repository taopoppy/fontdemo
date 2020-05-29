import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
	inputValue: 'start input',
	list: []
}

// 4. reducer中根据action的type类型进行不同的处理，返回newState
export default (state = defaultState,action)=> {
	if (action.type === CHANGE_INPUT_VALUE) {
		// reducer可以接收state，但是不能修改state，所以创建newState对state进行简单的深拷贝
		const newState = JSON.parse(JSON.stringify(state))
		// 根据action的type和value精准修改store中的值
		newState.inputValue = action.value
		// 返回新数据给Store
		return newState
	}
	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	if (action.type === INIT_LIST_ACTION) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.data
		return newState
	}
	return state
}