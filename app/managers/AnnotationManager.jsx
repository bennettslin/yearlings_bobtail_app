import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTitleIndex } from '../redux/actions/storage'

class AnnotationManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedTitleIndex: PropTypes.number.isRequired,
        selectTitleIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedTitleIndex
}) => ({
    selectedTitleIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectTitleIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationManager)
