const defaultState = {
	inputValue: 'start input',
	list: []
}

// 4. reducer中根据action的type类型进行不同的处理，返回newState
export default (state = defaultState,action)=> {
	if (action.type === 'change_input_value') {
		// reducer可以接收state，但是不能修改state，所以创建newState对state进行简单的深拷贝
		const newState = JSON.parse(JSON.stringify(state))
		// 根据action的type和value精准修改store中的值
		newState.inputValue = action.value
		// 返回新数据给Store
		return newState
	}
	if (action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if (action.type === 'delete_todo_item') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	return state
}