// Module to toggle score. Not needed to just turn off.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/actions/toggle'
import { getSongIsLogue } from 'helpers/dataHelper'

class TryScore extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShowable: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

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
            !getSongIsLogue(this.props.selectedSongIndex)

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
    songStore: { selectedSongIndex }
}) => ({
    isScoreShowable,
    isScoreShown,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TryScore)
