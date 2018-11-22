// Child that knows rules to toggle score. Not needed if just turning off.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/actions/toggle'

class DispatchScore extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShown: PropTypes.bool.isRequired,
        isScoreShowable: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getTryToggleScore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryToggleScore(this.tryToggleScore)
    }

    tryToggleScore = (
        // Just toggle unless parent specifies value.
        triedIsScoreShown = !this.props.isScoreShown
    ) => {
        // Turning off is always successful.
        const isScoreShown = triedIsScoreShown &&

            // If trying to turn on, score must be showable, and...
            this.props.isScoreShowable &&

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
    toggleStore: { isScoreShown },
    responsiveStore: { isScoreShowable },
    songStore: { isSelectedLogue }
}) => ({
    isScoreShown,
    isScoreShowable,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DispatchScore)
