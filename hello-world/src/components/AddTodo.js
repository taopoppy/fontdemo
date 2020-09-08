// AddTodo.js
import React, { Component } from 'react';
class AddTodo extends Component {
	render() {

		return (
			<div>
				{/* 1. 简约写法*/}
				{/* <input value={this.props.text} onChange={(e)=> this.props.setTodoText(e.target.value) }/> */}
				{/* <button onClick={()=> this.props.addTodo(this.props.text)}>Add</button> */}
				<input value={this.props.text} onChange={this.handleChange }/>
				<button onClick={this.handleClick}>Add</button>
			</div>
		);
	}

	handleChange = (e) => {
		this.props.setTodoText(e.target.value)
	}

	handleClick = () => {
		this.props.addTodo(this.props.text)
	}
}

export default AddTodo;