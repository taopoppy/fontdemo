import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, fetchTodos } from '../actions'
import { getVisibleTodos } from '../selectors/index'

// TodoList组件中可以拿到this.props.todos
const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state)
})
// TodoList组件中可以拿到this.props.toggleTodo
const mapDispatchProps = (dispatch) => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	fetchTodos: () => dispatch(fetchTodos())
})


export default connect(mapStateToProps, mapDispatchProps)(TodoList)