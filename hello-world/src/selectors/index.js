import { createSelector } from 'reselect'

export const getText = (state) => state.text
export const getFilter = (state) => state.filter
export const getTodos = (state) => state.todos.data

export const getVisibleTodos = createSelector(
	[getTodos, getFilter],
	(todos, filter) => {
		switch (filter) {
			case "all":
				return todos
			case "completed":
				return todos.filter(t => t.completed)
			case "active":
				return todos.filter(t => !t.completed)
			default:
				return new Error("Unknown filter", filter)
		}
	}
)