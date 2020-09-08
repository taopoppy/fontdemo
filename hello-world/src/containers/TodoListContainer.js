import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, fetchTodos } from '../actions'


const getVisibleTodos = (todos, filter ) => {
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
// TodoList组件中可以拿到this.props.todos
const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos.data, state.filter)
})
// TodoList组件中可以拿到this.props.toggleTodo
const mapDispatchProps = (dispatch) => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	fetchTodos: () => dispatch(fetchTodos())
})


export default connect(mapStateToProps, mapDispatchProps)(TodoList)