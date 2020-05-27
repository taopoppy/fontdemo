import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		// 5. 订阅到Store的变化
		store.subscribe(this.handleStoreChange)
	}

	render(){
		return (
			<div style={{marginTop:'10px',marginLeft:'10px'}}>
				<div>
					<Input
						value={this.state.inputValue}
						placeholder="todo info"
						style={{width: '300px',marginRight:'10px'}}
						onChange={this.handleInputChange}
					/>
					<Button
						type="primary"
						onClick={this.handleBtnClick} // 1. 点击提交按钮
					>Commit</Button>
				</div>
				<List
					style={{marginTop:'10px',width: '300px'}}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index) => (<List.Item onClick={this.hanleItemDelete.bind(this,index)}>{item}</List.Item>)}
				/>
			</div>
		)
	}

	handleInputChange(e) {
		const action = {
			type: 'change_input_value',
			value: e.target.value
		}
		store.dispatch(action)
	}

	handleStoreChange() {
		// 6. 重新取一遍数据
		this.setState(store.getState())
	}

	handleBtnClick() {
		const action = {
			type: 'add_todo_item'
		}
		store.dispatch(action)
	}

	hanleItemDelete(index){
		// 2. 创建action
		const action = {
			type: 'delete_todo_item',
			index
		}
		// 3. dispatch调度一个action
		store.dispatch(action)
	}
}

export default TodoList;