// Singleton to listen for non-toggle events that require turning off score.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'
import { updateToggleStore } from 'flux/toggle/action'

class ScoreListener extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShowable: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.unloadScoreIfNeeded(prevProps)
        this.closeScoreIfNeeded(prevProps)
    }

    unloadScoreIfNeeded(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.props.updateLoadStore({ isScoreLoaded: false })
        }
    }

    closeScoreIfNeeded(prevProps) {
        const
            {
                isScoreShowable,
                isSelectedLogue
            } = this.props,
            {
                isScoreShowable: wasScoreShowable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            !isScoreShowable && wasScoreShowable
        ) {
            this.props.updateToggleStore({ isScoreShown: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { isScoreShowable },
    toggleStore: { isScoreShown },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    }
}) => ({
    isScoreShowable,
    isScoreShown,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateLoadStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScoreListener)
