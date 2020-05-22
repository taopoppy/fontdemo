// TodoItem.js
import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		// 提前将handleClick函数的this绑定在TodoItem
		this.handleClick = this.handleClick.bind(this)
	}
	shouldComponentUpdate(nextProps,nextState) {
		if(nextProps.content !== this.props.content) {
			return true
		} else {
			return false
		}
	}
	handleClick() {
		// 调用父组件传递来的方法
		// deleteItem就是TodoItem中的handleItemDelete方法
		// deleteItem中的this指的就是父组件TotoList
		const { deleteItem, index } = this.props // 解构赋值
		deleteItem(index)
	}
	render() {
		const { content } = this.props
		return (
			<div onClick={this.handleClick}>
				{ content }
			</div>
		)
	}
}

// TodoItem这个组件做属性校验
TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

export default TodoItem