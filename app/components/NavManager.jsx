import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NavManager extends Component {

    static defaultProps = {
    }

    static propTypes = {
        getNavManagerRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getNavManagerRef(this)
    }

    render() {
        return null
    }
}

const mapStateToProps = (state) => (state)

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({

    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavManager)
