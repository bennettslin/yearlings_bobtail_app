// Module that knows rules to turn on score. Not needed to just turn off.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/actions/toggle'

class TryScore extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShowable: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setTryToggle: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setTryToggle(this.tryToggleScore)
    }

    tryToggleScore = (
        // Parent is trying to set this value. Default is toggle.
        triedIsScoreShown = !this.props.isScoreShown
    ) => {
        // Turning off is always successful.
        const isScoreShown = triedIsScoreShown &&

            // If trying to turn on, score must be showable, and...
            this.props.isScoreShowable &&

            // ... also must not be in logue.
            !this.props.isSelectedLogue

        this.props.updateToggleStore({
            isScoreShown
        })

        // Try was successful.
        return isScoreShown === triedIsScoreShown
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { isScoreShowable },
    toggleStore: { isScoreShown },
    songStore: { isSelectedLogue }
}) => ({
    isScoreShowable,
    isScoreShown,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TryScore)
