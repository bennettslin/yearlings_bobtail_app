import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTitleIndex } from '../redux/actions/storage'

class SceneManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedTitleIndex: PropTypes.number.isRequired,
        selectTitleIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    static propTypes = {
        getRef: PropTypes.func.isRequired
    }

    // eslint-disable-next-line
    constructor(props) {
        super(props)
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

export default connect(mapStateToProps, bindDispatchToProps)(SceneManager)
