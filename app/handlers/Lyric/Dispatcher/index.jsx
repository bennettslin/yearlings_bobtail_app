// Child that knows rules to toggle lyric. Not needed if just collapsing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { IS_LYRIC_EXPANDABLE_SELECTOR } from '../../../redux/responsive/selectors'

class LyricDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchLyricExpand: this.dispatchLyricExpand
        })
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

const mapStateToProps = state => {
    const {
            toggleStore: { isLyricExpanded },
            selectedStore: { isSelectedLogue }
        } = state,
        isLyricExpandable = IS_LYRIC_EXPANDABLE_SELECTOR(state)

    return {
        isLyricExpanded,
        isLyricExpandable,
        isSelectedLogue
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(LyricDispatcher)
