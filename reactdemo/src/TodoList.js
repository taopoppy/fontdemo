import React from 'react'
import { connect } from 'react-redux'
import {
	getInputChangeAction,
	getAddItemAction,
	getDeleteItemAction,
	getInitList
} from './store/actionCreators'
import store from './store/index.js'

const action = getInitList()
store.dispatch(action)

const TodoList = (props) => {
		const { inputValue, changeInputValue, handleClick, list,handleDeleteItem} = props
		return(
			<div>
				<div>
					<input
						value={inputValue}
						onChange={changeInputValue}
					/>
					<button
						onClick={handleClick}
					>commit</button>
				</div>
				<ul>
					{
						list.map((item,index) => {
							return <li key={index} onClick={()=>{ handleDeleteItem(index) }} >{item}</li>
						})
					}
				</ul>
			</div>
		)
}

const mapStateToProps = (state /**参数为redux中的数据 */) => {
	return {
		inputValue:state.inputValue,
		list:state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// 输入框输入处理
		changeInputValue(e) {
			const action = getInputChangeAction(e.target.value)
			dispatch(action)
		},
		// 提交按钮点击处理
		handleClick() {
			const action = getAddItemAction()
			dispatch(action)
		},
		// 点击item删除
		handleDeleteItem(index) {
			const action = getDeleteItemAction(index)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)