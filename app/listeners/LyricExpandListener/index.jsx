// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class LyricExpandListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricExpandable: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.collapseLyricIfNeeded(prevProps)
    }

    collapseLyricIfNeeded(prevProps) {
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricExpandListener)
