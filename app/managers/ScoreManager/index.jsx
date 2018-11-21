// Singleton to turn off score based on state changes.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsScoreLoaded } from 'flux/actions/load'
import { updateToggleStore } from 'flux/actions/toggle'

import { getSongIsLogue } from 'helpers/dataHelper'

class ScoreManager extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShowable: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        setIsScoreLoaded: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.unloadScoreIfNeeded(prevProps)
        this.closeScoreIfNeeded(prevProps)
    }

    unloadScoreIfNeeded(prevProps) {
        const
            {
                selectedSongIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex
            } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.props.setIsScoreLoaded(false)
        }
    }

    closeScoreIfNeeded(prevProps) {
        const
            {
                isScoreShowable,
                selectedSongIndex
            } = this.props,
            {
                isScoreShowable: wasScoreShowable,
                selectedSongIndex: prevSongIndex
            } = prevProps

        if (
            (getSongIsLogue(selectedSongIndex) && !getSongIsLogue(prevSongIndex)) ||
            !isScoreShowable && wasScoreShowable
        ) {
            this.props.updateToggleStore({
                isScoreShown: false
            })
        }
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
        setIsScoreLoaded,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScoreManager)
