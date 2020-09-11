import { ADD_TODO,TOGGLE_TODO,FETTH_TODOS_FAILURE,FETTH_TODOS_SUCCESS,FETTH_TODOS_REQUEST } from '../actions/actionTypes'

const initialState = {
	isFetching: false,
	error: null,
	data: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETTH_TODOS_REQUEST:
			return {
				...state,
				isFetching:true
			}
		case FETTH_TODOS_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.data
			}
		case FETTH_TODOS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		default:
			return {
				...state,
				data: todos(state.data, action)
			}
	}
}

const todos = (state = [], action) => {
	switch(action.type) {
		case ADD_TODO:
			return [...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map(todo => {
				return todo.id === action.id ? {...todo, completed: !todo.completed } : todo
			})
		default:
			return state
	}
}

export default reducer