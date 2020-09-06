import { connect } from 'redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'


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
	todos: getVisibleTodos(state.todos, state.filter)
})
// TodoList组件中可以拿到this.props.toggleTodo
const mapDispatchProps = (dispatch) => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})


export default connect(mapStateToProps, mapDispatchProps)(TodoList)