// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

class LyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricExpandable: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._collapseLyricIfNeeded(prevProps)
    }

    _collapseLyricIfNeeded(prevProps) {
        const
            {
                isLyricExpandable,
                isSelectedLogue
            } = this.props,
            {
                isLyricExpandable: wasLyricExpandable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            (!isLyricExpandable && wasLyricExpandable)
        ) {
            this.props.updateToggleStore({ isLyricExpanded: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { isLyricExpandable },
    songStore: { isSelectedLogue }
}) => ({
    isLyricExpandable,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(LyricListener)
