// AddTodo.js
import React, { Component } from 'react';

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}
	render() {
		const { addTodo } = this.props

		return (
			<div>
				<input value={this.state.text} onChange={this.handleChange}/>
				<button onClick={()=> addTodo(this.state.text)}>Add</button>
			</div>
		);
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}
}

export default AddTodo;