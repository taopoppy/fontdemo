export const getText = (state) => state.text
export const getFilter = (state) => state.filter

export const getVisibleTodos = ( state ) => {
	const { filter, todos: { data } } = state
	switch (filter) {
		case "all":
			return data
		case "completed":
			return data.filter(t => t.completed)
		case "active":
			return data.filter(t => !t.completed)
		default:
			return new Error("Unknown filter", filter)
	}
}