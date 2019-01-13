// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

class ScoreListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        hasRoomForScore: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._closeScoreIfNeeded(prevProps)
    }

    _closeScoreIfNeeded(prevProps) {
        const
            {
                hasRoomForScore,
                isSelectedLogue
            } = this.props,
            {
                hasRoomForScore: wasScoreShowable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            (!hasRoomForScore && wasScoreShowable)
        ) {
            this.props.updateToggleStore({ isScoreShown: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { hasRoomForScore },
    selectedStore: { isSelectedLogue }
}) => ({
    hasRoomForScore,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(ScoreListener)
