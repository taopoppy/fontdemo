// TodoList.js
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	handleInputChange(e) {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
	}
	handleButtonClick() {
		this.setState((prevState)=> ({
			list: [...prevState.list,prevState.inputValue],
			inputValue: ''
		}))
	}
	handleItemDelete(index) {
		this.setState((prevState)=> {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem
					content={item} // 传递属性
					key={index}
					index={index}
					deleteItem={this.handleItemDelete} // 传递方法
				/>
			)
		})
	}

	componentDidMount() {
		axios.get('/api/todolist')
		.then((res)=> {
			this.setState(()=> ({
				list: [...res.data]
			}))
		})
		.catch(()=> {alert('error')})
	}

	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea"></label>
					<input
						id="insertArea"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleButtonClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}
}

export default TodoList