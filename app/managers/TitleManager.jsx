import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTitleIndex } from '../redux/actions/storage'

class TitleManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedTitleIndex: PropTypes.number.isRequired,
        selectTitleIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    selectTitle(
        selectedTitleValue = (this.props.selectedTitleIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedTitleValue === 'boolean') {
            selectedTitleValue = selectedTitleValue ? 1 : 0
        }

        this.props.selectTitleIndex(selectedTitleValue)
        return true
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

export default connect(mapStateToProps, bindDispatchToProps)(TitleManager)
