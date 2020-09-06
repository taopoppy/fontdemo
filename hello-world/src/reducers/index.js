import todos from './todos'
import filter from './filter'
import text from './text'
import { combineReducers } from 'redux'

export default combineReducers({
	todos,
	filter,
	text
})