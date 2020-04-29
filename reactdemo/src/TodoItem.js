// TodoItem.js
import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		// 提前将handleClick函数的this绑定在TodoItem
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		// 调用父组件传递来的方法
		// deleteItem就是TodoItem中的handleItemDelete方法
		// deleteItem中的this指的就是父组件TotoList
		const { deleteItem, index } = this.props // 解构赋值
		deleteItem(index)
	}
	render() {
		const { content,test } = this.props
		return (
			<div onClick={this.handleClick}>
				{ test} - { content }
			</div>
		)
	}
}

// TodoItem这个组件做属性校验
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem