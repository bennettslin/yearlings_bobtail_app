// Child that knows rules to toggle lyric. Not needed if just collapsing.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class LyricExpandDispatcher extends Component {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchLyricExpand = this.dispatchLyricExpand
    }

    dispatchLyricExpand = (
        // Just toggle unless parent specifies value.
        triedIsLyricExpanded = !this.props.isLyricExpanded
    ) => {
        // Turning off is always successful.
        const isLyricExpanded = triedIsLyricExpanded &&

            // If trying to turn on, lyric must be expandable, and...
            this.props.isLyricExpandable &&

            // ... also must not be in logue.
            !this.props.isSelectedLogue

        this.props.updateToggleStore({ isLyricExpanded })

        // Try was successful.
        return isLyricExpanded === triedIsLyricExpanded
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isLyricExpanded },
    responsiveStore: { isLyricExpandable },
    songStore: { isSelectedLogue }
}) => ({
    isLyricExpanded,
    isLyricExpandable,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricExpandDispatcher)
