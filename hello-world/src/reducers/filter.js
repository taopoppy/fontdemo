import { SET_FILTER } from '../actions/actionTypes'

// filter这个state的初始值是"all"
const filter = (state ="all", action) =>  {
	switch (action.type) {
		case SET_FILTER:
			return action.filter
		default:
			return state
	}
}
export default filter