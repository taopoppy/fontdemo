// Footer.js
import React, { Component } from 'react';

class Footer extends Component {
	render() {
		// 这种写法是给this.props.setFilter起了个别名setVisibilityFilter，代码中可以使用别名
		// const { filter, setFilter: setVisibilityFilter } = this.props
		const { filter, setFilter } = this.props

		return (
			<div>
				<span>show:</span>
				<button
					disabled={filter === "all"}
					onClick={()=> {setFilter("all")}}
				>All</button>
				<button
					disabled={filter === "active"}
					onClick={()=> {setFilter("active")}}
				>Active</button>
				<button
					disabled={filter === "completed"}
					onClick={()=> {setFilter("completed")}}
				>Completed</button>
			</div>
		);
	}
}

export default Footer;