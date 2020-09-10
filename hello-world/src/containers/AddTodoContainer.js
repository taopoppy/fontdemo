import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo, setTodoText } from '../actions'
import { getText } from '../selectors/index'

// AddTodo组件中可以拿到this.props.text
const mapStateToProps = (state) => ({
	text: getText(state)
})
// AddTodo组件中可以拿到this.props.addTodo
// AddTodo组件中可以拿到this.props.setTodoText
const mapDispatchProps = (dispatch) => ({
	setTodoText: text => dispatch(setTodoText(text)),
	addTodo: text => dispatch(addTodo(text))
})


export default connect(mapStateToProps, mapDispatchProps)(AddTodo)