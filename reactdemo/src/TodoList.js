// TodoList.js
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

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
		// 3. 新版函数的ES6简写
		const value = e.target.value
		// const value = this.input.value
		this.setState(() => ({
			inputValue: value
		}))

		// // 2. 新版函数的写法
		// this.setState(()=> {
		// 	return {
		// 		inputValue: e.target.value
		// 	}
		// })

		// // 1.最古老的写法
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}
	handleButtonClick() {
		this.setState((prevState)=> ({
			list: [...prevState.list,prevState.inputValue],
			inputValue: ''
		}))

		// // 1. 最古老的写法
		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
	}
	handleItemDelete(index) {
		this.setState((prevState)=> {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})

		// // 1.最古老的写法
		// const list = [...this.state.list]
		// list.splice(index, 1)
		// this.setState({
		// 	list
		// })
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
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea"></label>
					<input
						id="insertArea"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						ref={(input) => {this.input = input}}
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