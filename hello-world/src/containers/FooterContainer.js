import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { setFilter } from '../actions'

// Footer组件中可以拿到this.props.filter
const mapStateToProps = (state) => ({
	filter: state.filter
})

// Footer组件中可以拿到this.props
const mapDispatchProps = (dispatch) => ({
	setFilter: filter => dispatch(setFilter(filter))
})


export default connect(mapStateToProps, mapDispatchProps)(Footer)