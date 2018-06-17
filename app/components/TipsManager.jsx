import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TipsManager extends Component {

    static defaultProps = {
    }

    static propTypes = {
        getTipsManagerRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTipsManagerRef(this)
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

export default connect(mapStateToProps, bindDispatchToProps)(TipsManager)
