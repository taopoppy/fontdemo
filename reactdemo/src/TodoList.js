import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index.js'
import {
	getInputChangeAction,
	getAddItemAction,
	getDeleteItemAction,
	getTodoList
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.hanleItemDelete = this.hanleItemDelete.bind(this)
		// 5. 订阅到Store的变化
		store.subscribe(this.handleStoreChange)
	}
	componentDidMount() {
		const action = getTodoList()
		store.dispatch(action)
	}

	render(){
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				hanleItemDelete={this.hanleItemDelete}
			/>
		)
	}

	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange() {
		// 6. 重新取一遍数据
		this.setState(store.getState())
	}

	handleBtnClick() {
		const action = getAddItemAction()
		store.dispatch(action)
	}

	hanleItemDelete(index){
		// 2. 创建action
		const action = getDeleteItemAction(index)
		// 3. dispatch调度一个action
		store.dispatch(action)
	}
}

export default TodoList;