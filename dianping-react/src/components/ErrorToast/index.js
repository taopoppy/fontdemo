import React, { Component } from 'react';
import './style.css'

class ErrorToast extends Component {
	componentDidMount() {
		this.timer = setTimeout(() => {
			// clearError函数可以将错误信息重置
			this.props.clearError()
		}, 3000)
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer)
		}
	}


	render() {
		const { msg }  = this.props
		return (
			<div className="errorToast">
				<div className="errorToast_text">
					{ msg }
				</div>
			</div>
		);
	}
}

export default ErrorToast;