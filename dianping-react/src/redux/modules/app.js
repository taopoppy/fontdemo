// 通用前端基础状态

// actionTypes
export const types = {
	CLEAR_ERROR: "APP/CLEAR_ERROR" // 清除错误
}


// actionCreators
export const actions ={
	clearError: () => ({
		type: types.CLEAR_ERROR
	})
}

const initialState = {
	error: null
}

const reducer = (state = initialState, action) => {
	const { type, error } = action
	if (type === types.CLEAR_ERROR) {
		return {...state, error:null}
	} else if (error) {
		// 通过判断action对象当中是否含有error属性来进行判断
		// 这是除了通过action.type的第二种判断action的方法
		return {...state, error: error}
	}
	return state
}

export default reducer

// selector
export const getError = (state) => {
	return state.app.error
}