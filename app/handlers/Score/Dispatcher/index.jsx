// Child that knows rules to toggle score. Not needed if just turning off.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

class ScoreDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        hasRoomForScore: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchScore: this.dispatchScore
        })
    }

    dispatchScore = (
        // Just toggle unless parent specifies value.
        triedIsScoreShown = !this.props.isScoreShown
    ) => {
        // Turning off is always successful.
        const isScoreShown = triedIsScoreShown &&

            // Score does not render if not higher processor.
            this.props.isHigherProcessor &&

            // If trying to turn on, score must be showable, and...
            this.props.hasRoomForScore &&

            // ... also must not be in logue.
            !this.props.isSelectedLogue

        this.props.updateToggleStore({ isScoreShown })

        // Try was successful.
        return isScoreShown === triedIsScoreShown
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    mobileStore: { isHigherProcessor },
    toggleStore: { isScoreShown },
    responsiveStore: { hasRoomForScore },
    selectedStore: { isSelectedLogue }
}) => ({
    isHigherProcessor,
    isScoreShown,
    hasRoomForScore,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(ScoreDispatcher)
